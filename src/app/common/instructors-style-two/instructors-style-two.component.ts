import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-style-two',
    imports: [RouterLink],
    templateUrl: './instructors-style-two.component.html',
    styleUrls: ['./instructors-style-two.component.scss']
})
export class InstructorsStyleTwoComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}