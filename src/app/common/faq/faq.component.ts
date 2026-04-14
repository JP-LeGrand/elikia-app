import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-faq',
    imports: [NgClass],
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

    // FAQ
    items = [
        {
            title: 'What are the different types of undergraduate degrees?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: true
        },
        {
            title: 'What are the different types of graduate degrees?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        },
        {
            title: 'Can you work while studying in the United States?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        },
        {
            title: 'What is distance education?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        }
    ];
    toggleItem(index: number) {
        this.items = this.items.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false
        }));
    }

}