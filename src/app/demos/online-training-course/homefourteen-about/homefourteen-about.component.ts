import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homefourteen-about',
    imports: [RouterLink],
    templateUrl: './homefourteen-about.component.html',
    styleUrls: ['./homefourteen-about.component.scss']
})
export class HomefourteenAboutComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}