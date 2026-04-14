import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-style-four',
    imports: [RouterLink],
    templateUrl: './instructors-style-four.component.html',
    styleUrls: ['./instructors-style-four.component.scss']
})
export class InstructorsStyleFourComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}