import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeCustomizerService {

    private isDarkTheme: boolean;

    private isToggled = new BehaviorSubject<boolean>(false);

    constructor() {
        // Check if the window and localStorage are available (i.e., we're in the browser environment)
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('isDarkTheme');
            this.isDarkTheme = savedTheme ? JSON.parse(savedTheme) : false;
            this.isToggled.next(this.isDarkTheme); // Sync BehaviorSubject with the current theme state
        } else {
            this.isDarkTheme = false; // Default value if localStorage isn't available
        }
    }

    toggleTheme() {
        // Ensure localStorage operations are only performed in the browser
        if (typeof window !== 'undefined' && window.localStorage) {
            this.isDarkTheme = !this.isDarkTheme;
            localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
            this.isToggled.next(this.isDarkTheme); // Update the BehaviorSubject after toggling
        }
    }

    isDark() {
        return this.isDarkTheme;
    }

    get isToggled$() {
        return this.isToggled.asObservable();
    }

}