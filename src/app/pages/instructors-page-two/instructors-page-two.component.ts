import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-page-two',
    imports: [HeaderStyleThreeComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './instructors-page-two.component.html',
    styleUrls: ['./instructors-page-two.component.scss']
})
export class InstructorsPageTwoComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}