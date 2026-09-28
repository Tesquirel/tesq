import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppointmentCalendarService } from './appointment-calendar.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.scss'],
  imports: [DatePipe, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AppointmentCalendarComponent implements OnInit {
  weeks: Date[][] = [];
  currentYear!: number;
  currentMonth!: number;
  selectedDate: Date | null = null;
  unavailableDates: Date[] = [];
  timeSlots: string[] = [];
  availableTimeSlots: string[] = [];
  selectedTimeSlot: string | null = null;
  appointmentForm!: FormGroup;
  isBooking = false;
  unavailableDateSlots: Record<string, { is_day_block?: boolean; time_slots?: string[] }> = {};
  bookedSlotsForDate: string[] = [];

  constructor(private appointmentCalendarService: AppointmentCalendarService, private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      appointmentFullName: ['', [Validators.required]],
      appointmentEmailID: ['', [Validators.required]],
      appointmentSubject: ['', [Validators.required]],
      appointmentMessage: ['', []]
    });
  }

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();

    // Mock API Response — Replace with actual API later
    // const apiUnavailableDates = ['2025-11-14', '2025-11-16', '2025-11-22'];
    // this.unavailableDates = apiUnavailableDates.map((d) => new Date(d));
    this.loadUnavailableDates();
    this.generateCalendar(this.currentYear, this.currentMonth);
    this.generateTimeSlots();
  }

  /** Generate month structure **/
  generateCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const weeks: Date[][] = [];
    let currentWeek: Date[] = [];

    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay()); // start from Sunday

    const endDate = new Date(lastDay);
    endDate.setDate(lastDay.getDate() + (6 - lastDay.getDay())); // end on Saturday

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      currentWeek.push(new Date(date));
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    this.weeks = weeks;
  }

  /** Month navigation **/
  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentYear, this.currentMonth);
  }

  /** Date utilities **/
  isCurrentMonth(day: Date): boolean {
    return day.getMonth() === this.currentMonth;
  }

  isPastDate(day: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const compare = new Date(day);
    compare.setHours(0, 0, 0, 0);
    return compare.getTime() < today.getTime();
  }

  isSunday(day: Date): boolean {
    return day.getDay() === 0;
  }

  isUnavailableDate(day: Date): boolean {
    return this.unavailableDates.some(
      (d) =>
        d.getFullYear() === day.getFullYear() &&
        d.getMonth() === day.getMonth() &&
        d.getDate() === day.getDate()
    );
  }

  isSelected(day: Date): boolean {
    return (
      this.selectedDate !== null &&
      day.getFullYear() === this.selectedDate.getFullYear() &&
      day.getMonth() === this.selectedDate.getMonth() &&
      day.getDate() === this.selectedDate.getDate()
    );
  }

  /** When a date is clicked **/
  onDayClick(day: Date) {
    if (this.isPastDate(day) || this.isUnavailableDate(day) || !this.isCurrentMonth(day) || this.isSunday(day)) return;
    // this.selectedDate = day;
    // this.generateAvailableTimeSlots();
    if (this.selectedDate && day.toDateString() === this.selectedDate.toDateString()) {
      this.selectedDate = null;
      // this.timeSlots = [];
      this.availableTimeSlots = [];
      this.selectedTimeSlot = null;
    } else {
      this.selectedDate = day;
      this.selectedTimeSlot = null;
      this.loadBookedSlotsForDate(day);
      // this.generateAvailableTimeSlots();
    }
  }

  /** Generate static hourly slots **/
  generateTimeSlots() {
    this.timeSlots = [];
    for (let hour = 10; hour <= 17; hour++) {
      this.timeSlots.push(`${hour}:00`, `${hour}:30`);
    }
  }

  getBlockedSlotsForDay(): string[] {
    const blocked = new Set<string>();

    this.bookedSlotsForDate.forEach(slot => {
      blocked.add(slot); // add the booked slot

      // find the index of the slot
      const index = this.timeSlots.indexOf(slot);

      // add the next slot if exists (i.e., slot after this index)
      if (index !== -1 && index + 1 < this.timeSlots.length) {
        blocked.add(this.timeSlots[index + 1]);
      }
    });

    return Array.from(blocked);
  }


  /** Mock API filter for available time slots **/
  generateAvailableTimeSlots() {
    // You can filter here based on selected date via API response
    // this.availableTimeSlots = this.timeSlots;
    const blockedSlots = this.getBlockedSlotsForDay();
    this.availableTimeSlots = this.timeSlots.filter(
      slot => !blockedSlots.includes(slot)
    );
    // this.availableTimeSlots = this.timeSlots.filter(
    //   slot => !this.bookedSlotsForDate.includes(slot)
    // );
  }

  loadBookedSlotsForDate(day: Date) {
    // const key = day.toISOString().split("T")[0]; // YYYY-MM-DD
    const key = day.getFullYear() + '-' +
      String(day.getMonth() + 1).padStart(2, '0') + '-' +
      String(day.getDate()).padStart(2, '0');
    // unavailableDateSlots[key] is an object { is_day_block?, time_slots? }, so use its time_slots array or fallback to []
    this.bookedSlotsForDate = this.unavailableDateSlots[key]?.time_slots || [];
    this.generateAvailableTimeSlots();
  }

  onTimeSelect(slot: string) {
    this.selectedTimeSlot = slot;
  }

  loadUnavailableDates() {
    this.appointmentCalendarService.getUnavailableDateTimeSlotsService().subscribe({
      next: (response: any) => {
        if (response) {
          const apiUnavailableDates = response.unavailableDates;
          // this.unavailableDates = apiUnavailableDates.map((d: any) => new Date(d));
          this.unavailableDateSlots = apiUnavailableDates;
          this.updateUnavailableDates();
        }
      },
    });
  }

  updateUnavailableDates() {
    this.unavailableDates = [];

    Object.keys(this.unavailableDateSlots).forEach(dateStr => {
      const entry = this.unavailableDateSlots[dateStr];

      const day = new Date(dateStr);

      const isDayBlocked = entry.is_day_block === true;
      const times = entry.time_slots || [];

      // 16 slots: 10:00 → 17:30
      const TOTAL_SLOTS = this.timeSlots.length;

      const isFullyBooked = times.length >= TOTAL_SLOTS;

      if (isDayBlocked || isFullyBooked) {
        this.unavailableDates.push(day);
      }
    });
  }


  appointmentBooking() {
    this.isBooking = true;
    const appointmentDate = this.selectedDate
      ? `${this.selectedDate.getFullYear()}-${(this.selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${this.selectedDate.getDate().toString().padStart(2, '0')}`
      : '';

    const payload = {
      appointmentFullName: this.appointmentForm.controls['appointmentFullName'].value,
      appointmentEmailID: this.appointmentForm.controls['appointmentEmailID'].value,
      appointmentDate: appointmentDate, // safe string (or empty)
      appointmentTimeSlot: this.selectedTimeSlot ?? '',
      appointmentSubject: this.appointmentForm.controls['appointmentSubject'].value,
      appointmentMessage: this.appointmentForm.controls['appointmentMessage'].value,
      isTesting: environment.isTesting,
      createdBy: '',
      createdDatetime: '',
      modifiedBy: '',
      modifiedDatetime: '',
      orgCode: 'TSQ',
    }
    this.appointmentCalendarService.appointmentBookService(payload).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          alert('Thank you for Booking an Appointment.');
          this.appointmentForm.reset();
          this.selectedDate = null;
          this.selectedTimeSlot = null;
          this.isBooking = false;
          this.loadUnavailableDates();
          this.appointmentInvite(payload);
        }
      },
    });
  }

  appointmentInvite(payload: any) {
    this.appointmentCalendarService.appointmentInviteService(payload).subscribe({
      next: (response: any) => {
        if (response.status === 'success') { }
      },
    });
  }
}

