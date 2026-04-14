import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstc-four-page',
    imports: [HeaderStyleOneComponent, RouterLink],
    templateUrl: './courses-gstc-four-page.component.html',
    styleUrl: './courses-gstc-four-page.component.scss'
})
export class CoursesGstcFourPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}