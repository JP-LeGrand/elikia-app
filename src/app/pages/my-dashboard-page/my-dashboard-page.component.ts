import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-my-dashboard-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './my-dashboard-page.component.html',
    styleUrls: ['./my-dashboard-page.component.scss']
})
export class MyDashboardPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}