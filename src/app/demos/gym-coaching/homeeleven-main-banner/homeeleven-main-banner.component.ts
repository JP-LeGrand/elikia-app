import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homeeleven-main-banner',
    imports: [CarouselModule, RouterLink],
    templateUrl: './homeeleven-main-banner.component.html',
    styleUrls: ['./homeeleven-main-banner.component.scss']
})
export class HomeelevenMainBannerComponent {

    gymHomeSlides: OwlOptions = {
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight: true,
        autoplay: true,
        dots: true,
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}