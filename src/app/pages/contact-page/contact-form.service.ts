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

const DEFAULT_CONTACT_API_BASE_URL = 'http://localhost:5142';

@Injectable({
    providedIn: 'root'
})
export class ContactFormService {
    private readonly contactApiBaseUrl = DEFAULT_CONTACT_API_BASE_URL;

    constructor(private readonly http: HttpClient) {}

    sendMessage(payload: ContactFormPayload): Observable<ContactFormResponse> {
        return this.http.post<ContactFormResponse>(`${this.contactApiBaseUrl}/api/contact`, payload);
    }

}
