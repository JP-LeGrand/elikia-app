import { Component, inject } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../common/language/language.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { ContactFormService } from './contact-form.service';

type ContactFormControlName = 'name' | 'email' | 'phone' | 'subject' | 'message';

@Component({
    selector: 'app-contact-page',
    imports: [HeaderStyleTwoComponent, RouterLink, ReactiveFormsModule],
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

    lang = inject(LanguageService);
    private readonly formBuilder = inject(FormBuilder);
    private readonly contactFormService = inject(ContactFormService);

    readonly contactForm = this.formBuilder.nonNullable.group({
        name: ['', [Validators.required, Validators.maxLength(100)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
        phone: ['', [Validators.required, Validators.pattern(/^[+]?[-()\d\s]{7,20}$/)]],
        subject: ['', [Validators.required, Validators.maxLength(140)]],
        message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
    });

    isSubmitting = false;
    submitFeedbackKey: 'contactFormSuccessMessage' | 'contactFormErrorMessage' | 'contactFormRateLimitMessage' | '' = '';

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    onSubmit(): void {
        if (this.isSubmitting) {
            return;
        }

        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;
        this.submitFeedbackKey = '';

        this.contactFormService
            .sendMessage(this.contactForm.getRawValue())
            .pipe(finalize(() => (this.isSubmitting = false)))
            .subscribe({
                next: () => {
                    this.submitFeedbackKey = 'contactFormSuccessMessage';
                    this.contactForm.reset({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                    this.contactForm.markAsPristine();
                    this.contactForm.markAsUntouched();
                },
                error: (error: HttpErrorResponse) => {
                    this.submitFeedbackKey = error.status === 429 ? 'contactFormRateLimitMessage' : 'contactFormErrorMessage';
                }
            });
    }

    hasError(controlName: ContactFormControlName, errorName: string): boolean {
        const control = this.contactForm.controls[controlName];
        return control.touched && control.hasError(errorName);
    }

}
