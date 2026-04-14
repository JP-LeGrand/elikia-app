import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-main-banner',
    imports: [RouterLink],
    templateUrl: './hometwelve-main-banner.component.html',
    styleUrls: ['./hometwelve-main-banner.component.scss']
})
export class HometwelveMainBannerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}