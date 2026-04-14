import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstwc-two-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './courses-gstwc-two-page.component.html',
    styleUrl: './courses-gstwc-two-page.component.scss'
})
export class CoursesGstwcTwoPageComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}