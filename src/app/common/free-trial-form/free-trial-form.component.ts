import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-free-trial-form',
    imports: [RouterLink],
    templateUrl: './free-trial-form.component.html',
    styleUrls: ['./free-trial-form.component.scss']
})
export class FreeTrialFormComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}