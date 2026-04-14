import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-list-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './courses-list-page.component.html',
    styleUrls: ['./courses-list-page.component.scss']
})
export class CoursesListPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}