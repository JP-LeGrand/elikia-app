import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeone-main-banner',
    imports: [CarouselModule, RouterLink],
    templateUrl: './homeone-main-banner.component.html',
    styleUrls: ['./homeone-main-banner.component.scss']
})
export class HomeoneMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    missionSlides: OwlOptions = {
		nav: true,
		loop: true,
		dots: false,
		smartSpeed: 500,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}