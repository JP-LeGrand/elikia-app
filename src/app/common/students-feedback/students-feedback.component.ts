import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-students-feedback',
    imports: [CarouselModule],
    templateUrl: './students-feedback.component.html',
    styleUrls: ['./students-feedback.component.scss']
})
export class StudentsFeedbackComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    studentsFeedbackSlides: OwlOptions = {
        items: 1,
        nav: true,
		loop: true,
        dots: false,
        autoplay: true,
		smartSpeed: 500,
        mouseDrag: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ]
    }

}