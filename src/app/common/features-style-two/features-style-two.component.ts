import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-features-style-two',
    imports: [],
    templateUrl: './features-style-two.component.html',
    styleUrls: ['./features-style-two.component.scss']
})
export class FeaturesStyleTwoComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}