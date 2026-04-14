import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homefourteen-main-banner',
    imports: [CarouselModule, RouterLink],
    templateUrl: './homefourteen-main-banner.component.html',
    styleUrls: ['./homefourteen-main-banner.component.scss']
})
export class HomefourteenMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    partnerSlides: OwlOptions = {
		loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 6,
            },
            1200: {
                items: 6,
            }
        }
    }

}