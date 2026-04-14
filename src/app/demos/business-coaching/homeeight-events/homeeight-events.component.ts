import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeeight-events',
    imports: [RouterLink],
    templateUrl: './homeeight-events.component.html',
    styleUrls: ['./homeeight-events.component.scss']
})
export class HomeeightEventsComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}