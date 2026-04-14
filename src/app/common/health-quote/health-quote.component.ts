import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-health-quote',
    imports: [],
    templateUrl: './health-quote.component.html',
    styleUrls: ['./health-quote.component.scss']
})
export class HealthQuoteComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}