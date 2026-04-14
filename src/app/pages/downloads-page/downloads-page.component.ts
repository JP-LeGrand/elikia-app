import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-downloads-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './downloads-page.component.html',
    styleUrls: ['./downloads-page.component.scss']
})
export class DownloadsPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}