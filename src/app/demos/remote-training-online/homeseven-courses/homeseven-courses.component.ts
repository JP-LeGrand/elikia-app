import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeseven-courses',
    imports: [RouterLink],
    templateUrl: './homeseven-courses.component.html',
    styleUrls: ['./homeseven-courses.component.scss']
})
export class HomesevenCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}