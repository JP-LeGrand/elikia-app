import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-free-trial',
    imports: [],
    templateUrl: './free-trial.component.html',
    styleUrls: ['./free-trial.component.scss']
})
export class FreeTrialComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}