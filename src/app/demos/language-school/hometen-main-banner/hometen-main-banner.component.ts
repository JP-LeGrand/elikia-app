import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometen-main-banner',
    imports: [RouterLink],
    templateUrl: './hometen-main-banner.component.html',
    styleUrls: ['./hometen-main-banner.component.scss']
})
export class HometenMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}