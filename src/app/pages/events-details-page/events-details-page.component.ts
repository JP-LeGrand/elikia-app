import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-events-details-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './events-details-page.component.html',
    styleUrls: ['./events-details-page.component.scss']
})
export class EventsDetailsPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}