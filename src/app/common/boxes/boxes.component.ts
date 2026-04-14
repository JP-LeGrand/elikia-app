import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-boxes',
    imports: [RouterLink],
    templateUrl: './boxes.component.html',
    styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}