import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-features-style-three',
    imports: [RouterLink],
    templateUrl: './features-style-three.component.html',
    styleUrls: ['./features-style-three.component.scss']
})
export class FeaturesStyleThreeComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}