import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-popular-courses',
    imports: [RouterLink],
    templateUrl: './hometwelve-popular-courses.component.html',
    styleUrls: ['./hometwelve-popular-courses.component.scss']
})
export class HometwelvePopularCoursesComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}