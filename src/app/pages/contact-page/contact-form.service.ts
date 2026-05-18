import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface ContactFormPayload {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface ContactFormResponse {
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactFormService {
    private readonly dotnetApiUrl = environment.dotnetContactApiUrl;
    private readonly requestTimeoutMs = 8000;

    constructor(private readonly http: HttpClient) {}

    sendMessage(payload: ContactFormPayload): Observable<ContactFormResponse> {
        return this.http
            .post<ContactFormResponse>(this.dotnetApiUrl, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(
                timeout(this.requestTimeoutMs),
                catchError((error: HttpErrorResponse) => {
                    console.error('Contact form delivery error:', {
                        status: error.status,
                        message: error.message,
                        error: error.error
                    });
                    return throwError(() => error);
                })
            );
    }
}
