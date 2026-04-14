import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-feedback-style-one',
    imports: [CarouselModule],
    templateUrl: './feedback-style-one.component.html',
    styleUrls: ['./feedback-style-one.component.scss']
})
export class FeedbackStyleOneComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    feedbackSlides: OwlOptions = {
		nav: true,
		loop: true,
		dots: false,
        animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		mouseDrag: false,
		smartSpeed: 500,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}