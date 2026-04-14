import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-become-instructor-partner',
    imports: [RouterLink],
    templateUrl: './become-instructor-partner.component.html',
    styleUrls: ['./become-instructor-partner.component.scss']
})
export class BecomeInstructorPartnerComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}