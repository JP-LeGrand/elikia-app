import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from '../../../common/language/language.service';
import { inject } from '@angular/core';

@Component({
    selector: 'app-hometwo-main-banner',
    imports: [CarouselModule, RouterLink],
    templateUrl: './hometwo-main-banner.component.html',
    styleUrls: ['./hometwo-main-banner.component.scss']
})
export class HometwoMainBannerComponent {

    /** Expose service publicly so templates call lang.t('key') directly */
    readonly lang = inject(LanguageService);

    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		autoHeight: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
    }

}
