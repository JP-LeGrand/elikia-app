import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    constructor(private readonly http: HttpClient) {}

    sendMessage(payload: ContactFormPayload): Observable<ContactFormResponse> {
        return this.http.post<ContactFormResponse>('/api/contact', payload);
    }

}
