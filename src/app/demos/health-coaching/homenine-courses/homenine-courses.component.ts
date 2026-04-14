import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homenine-courses',
    imports: [RouterLink],
    templateUrl: './homenine-courses.component.html',
    styleUrls: ['./homenine-courses.component.scss']
})
export class HomenineCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}