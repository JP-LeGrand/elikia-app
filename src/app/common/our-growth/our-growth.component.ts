import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-our-growth',
    imports: [],
    templateUrl: './our-growth.component.html',
    styleUrls: ['./our-growth.component.scss']
})
export class OurGrowthComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}