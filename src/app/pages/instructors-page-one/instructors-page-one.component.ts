import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-page-one',
    imports: [HeaderStyleTwoComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './instructors-page-one.component.html',
    styleUrls: ['./instructors-page-one.component.scss']
})
export class InstructorsPageOneComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}