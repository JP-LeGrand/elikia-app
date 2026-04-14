import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-health-subscribe',
    imports: [],
    templateUrl: './health-subscribe.component.html',
    styleUrls: ['./health-subscribe.component.scss']
})
export class HealthSubscribeComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}