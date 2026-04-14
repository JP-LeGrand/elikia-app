import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gsoc-two-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './courses-gsoc-two-page.component.html',
    styleUrl: './courses-gsoc-two-page.component.scss'
})
export class CoursesGsocTwoPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}