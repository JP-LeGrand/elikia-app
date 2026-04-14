import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-homethree-about',
    imports: [],
    templateUrl: './homethree-about.component.html',
    styleUrls: ['./homethree-about.component.scss']
})
export class HomethreeAboutComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}