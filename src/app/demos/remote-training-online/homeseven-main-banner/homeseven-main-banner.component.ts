import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeseven-main-banner',
    imports: [RouterLink],
    templateUrl: './homeseven-main-banner.component.html',
    styleUrls: ['./homeseven-main-banner.component.scss']
})
export class HomesevenMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}