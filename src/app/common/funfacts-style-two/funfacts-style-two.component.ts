import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-funfacts-style-two',
    imports: [],
    templateUrl: './funfacts-style-two.component.html',
    styleUrls: ['./funfacts-style-two.component.scss']
})
export class FunfactsStyleTwoComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}