import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner-style-one',
    imports: [CarouselModule],
    templateUrl: './partner-style-one.component.html',
    styleUrls: ['./partner-style-one.component.scss']
})
export class PartnerStyleOneComponent {

	readonly partnerLogos = [
		'https://storage.googleapis.com/elikia_buclet/images/partners/partner1.jpg',
		'https://storage.googleapis.com/elikia_buclet/images/partners/partner2.jpg',
		'https://storage.googleapis.com/elikia_buclet/images/partners/partner3.png',
		'https://storage.googleapis.com/elikia_buclet/images/partners/partner4.png',
		'https://storage.googleapis.com/elikia_buclet/images/partners/partner5.jpeg',
		'https://storage.googleapis.com/elikia_buclet/images/partners/partner6.jpg',
        'https://storage.googleapis.com/elikia_buclet/images/partners/partner7.jpg',
        'https://storage.googleapis.com/elikia_buclet/images/partners/partner8.png',
        'https://storage.googleapis.com/elikia_buclet/images/partners/partner9.jpg',
        'https://storage.googleapis.com/elikia_buclet/images/partners/partner10.png',
        'https://storage.googleapis.com/elikia_buclet/images/partners/partner11.jpg',
        'https://storage.googleapis.com/elikia_buclet/images/partners/partner12.png',
	];

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
