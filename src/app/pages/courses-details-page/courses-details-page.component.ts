import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-details-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './courses-details-page.component.html',
    styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}