import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethirteen-popular-courses',
    imports: [RouterLink],
    templateUrl: './homethirteen-popular-courses.component.html',
    styleUrls: ['./homethirteen-popular-courses.component.scss']
})
export class HomethirteenPopularCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}