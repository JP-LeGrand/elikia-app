import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-details-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './instructors-details-page.component.html',
    styleUrls: ['./instructors-details-page.component.scss']
})
export class InstructorsDetailsPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}