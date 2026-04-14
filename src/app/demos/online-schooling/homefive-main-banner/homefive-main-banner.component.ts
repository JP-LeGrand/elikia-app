import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homefive-main-banner',
    imports: [RouterLink],
    templateUrl: './homefive-main-banner.component.html',
    styleUrls: ['./homefive-main-banner.component.scss']
})
export class HomefiveMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}