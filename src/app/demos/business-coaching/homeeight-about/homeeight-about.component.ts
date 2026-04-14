import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeeight-about',
    imports: [RouterLink],
    templateUrl: './homeeight-about.component.html',
    styleUrls: ['./homeeight-about.component.scss']
})
export class HomeeightAboutComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}