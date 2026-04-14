import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-language-subscribe',
    imports: [],
    templateUrl: './language-subscribe.component.html',
    styleUrls: ['./language-subscribe.component.scss']
})
export class LanguageSubscribeComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}