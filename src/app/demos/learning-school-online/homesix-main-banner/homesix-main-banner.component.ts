import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-homesix-main-banner',
    imports: [],
    templateUrl: './homesix-main-banner.component.html',
    styleUrls: ['./homesix-main-banner.component.scss']
})
export class HomesixMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}