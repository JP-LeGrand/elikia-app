import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-courses',
    imports: [RouterLink],
    templateUrl: './hometwelve-courses.component.html',
    styleUrls: ['./hometwelve-courses.component.scss']
})
export class HometwelveCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}