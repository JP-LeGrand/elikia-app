import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-style-three',
    imports: [RouterLink],
    templateUrl: './instructors-style-three.component.html',
    styleUrls: ['./instructors-style-three.component.scss']
})
export class InstructorsStyleThreeComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}