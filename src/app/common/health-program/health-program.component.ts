import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-health-program',
    imports: [RouterLink],
    templateUrl: './health-program.component.html',
    styleUrls: ['./health-program.component.scss']
})
export class HealthProgramComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}