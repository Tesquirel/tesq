import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    public isLoggedIn$ = this.loggedInSubject.asObservable();

    // Replace with your actual backend API endpoint
    private readonly apiUrl = 'https://api.example.com/login';

    constructor(private http: HttpClient, private router: Router) { }

    /**
     * Checks if a token exists in local storage to determine the initial login status.
     */
    hasToken(): boolean {
        return !!localStorage.getItem('tq-token');
    }

    /**
     * Sends login credentials to the backend API.
     * @param username The user's username.
     * @param password The user's password.
     * @returns An observable indicating the success of the login request.
     */
    // loginService(credentials: any): Observable<any> {
    //     return this.http.post<any>(this.apiUrl, credentials).pipe(
    //         tap(response => {
    //             // Assuming the backend returns a 'token' upon successful login
    //             localStorage.setItem('token', response.token);
    //             this.loggedInSubject.next(true);
    //         }),
    //         catchError(error => {
    //             console.error('Login failed', error);
    //             // Clear token on failed login
    //             this.logoutService();
    //             return of(false);
    //         })
    //     );
    // }

    loginService(token: any) {
        // return this.http.post<any>(this.apiUrl, credentials).pipe(
        //     tap(response => {
        //         // Assuming the backend returns a 'token' upon successful login
        //         localStorage.setItem('token', response.token);
        //         this.loggedInSubject.next(true);
        //     }),
        //     catchError(error => {
        //         console.error('Login failed', error);
        //         // Clear token on failed login
        //         this.logoutService();
        //         return of(false);
        //     })
        // );
        localStorage.setItem('tq-token', token);
        this.loggedInSubject.next(true);
    }

    /**
     * Logs out the user by removing the token and updating the login status.
     */
    logoutService(): void {
        localStorage.removeItem('tq-token');
        this.loggedInSubject.next(false);
        this.router.navigate(['/login']);
    }

    /**
     * Helper function to get the authentication token.
     */
    getToken(): string | null {
        return localStorage.getItem('tq-token');
    }
}
