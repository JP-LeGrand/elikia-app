import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-partner-style-two',
    imports: [CarouselModule],
    templateUrl: './partner-style-two.component.html',
    styleUrls: ['./partner-style-two.component.scss']
})
export class PartnerStyleTwoComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 25,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
    }

}