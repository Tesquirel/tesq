import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppointmentCalendarService {

    orgCode = 'TSQ';

    appointmentBookUrl = environment.apiUrl + 'book-appointment';
    appointmentInviteUrl = environment.apiUrl + 'invite';
    getUnavailableDatesUrl = environment.apiUrl + 'unavailable-appointments';
    getUnavailableDateTimeSlotsUrl = environment.apiUrl + 'unavailable-date-time-slots';

    constructor(private http: HttpClient) { }

    appointmentBookService(info: any): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.appointmentBookUrl, info, { headers });
    }

    getUnavailableDatesService(): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.getUnavailableDatesUrl + '/' + this.orgCode, { headers });
    }

    getUnavailableDateTimeSlotsService(): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.getUnavailableDateTimeSlotsUrl + '/' + this.orgCode, { headers });
    }

    appointmentInviteService(info: any): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.appointmentInviteUrl, info, { headers });
    }

}