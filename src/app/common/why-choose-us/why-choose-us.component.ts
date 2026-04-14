import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-why-choose-us',
    imports: [RouterLink],
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}