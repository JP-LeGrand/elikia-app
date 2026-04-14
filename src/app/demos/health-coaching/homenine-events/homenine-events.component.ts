import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homenine-events',
    imports: [RouterLink],
    templateUrl: './homenine-events.component.html',
    styleUrls: ['./homenine-events.component.scss']
})
export class HomenineEventsComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}