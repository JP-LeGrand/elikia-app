import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-about',
    imports: [RouterLink],
    templateUrl: './hometwelve-about.component.html',
    styleUrls: ['./hometwelve-about.component.scss']
})
export class HometwelveAboutComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}