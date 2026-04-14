import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethirteen-about',
    imports: [RouterLink],
    templateUrl: './homethirteen-about.component.html',
    styleUrls: ['./homethirteen-about.component.scss']
})
export class HomethirteenAboutComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}