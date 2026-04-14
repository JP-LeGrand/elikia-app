import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstwc-four-page',
    imports: [HeaderStyleOneComponent, RouterLink],
    templateUrl: './courses-gstwc-four-page.component.html',
    styleUrl: './courses-gstwc-four-page.component.scss'
})
export class CoursesGstwcFourPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}