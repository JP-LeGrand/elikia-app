import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeeight-courses',
    imports: [RouterLink],
    templateUrl: './homeeight-courses.component.html',
    styleUrls: ['./homeeight-courses.component.scss']
})
export class HomeeightCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}