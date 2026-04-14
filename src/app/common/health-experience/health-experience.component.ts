import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-health-experience',
    imports: [RouterLink],
    templateUrl: './health-experience.component.html',
    styleUrls: ['./health-experience.component.scss']
})
export class HealthExperienceComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}