import { Component } from '@angular/core';
import { AppointmentCalendarComponent } from '../appointment-calendar/appointment-calendar.component';

@Component({
  selector: 'app-book-an-appointment',
  imports: [AppointmentCalendarComponent],
  templateUrl: './book-an-appointment.component.html',
  styleUrl: './book-an-appointment.component.scss'
})
export class BookAnAppointmentComponent {

}
