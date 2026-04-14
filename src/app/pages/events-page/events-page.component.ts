import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-events-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './events-page.component.html',
    styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}