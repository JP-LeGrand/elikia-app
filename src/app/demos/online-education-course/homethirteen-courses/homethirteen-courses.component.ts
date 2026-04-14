import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethirteen-courses',
    imports: [RouterLink],
    templateUrl: './homethirteen-courses.component.html',
    styleUrls: ['./homethirteen-courses.component.scss']
})
export class HomethirteenCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}