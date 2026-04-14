import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homefour-courses',
    imports: [CarouselModule, RouterLink],
    templateUrl: './homefour-courses.component.html',
    styleUrls: ['./homefour-courses.component.scss']
})
export class HomefourCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    coursesSlides: OwlOptions = {
		nav: true,
		dots: true,
		loop: false,
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
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
    }

}