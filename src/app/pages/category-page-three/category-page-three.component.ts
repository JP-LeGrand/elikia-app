import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-category-page-three',
    imports: [HeaderStyleOneComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './category-page-three.component.html',
    styleUrls: ['./category-page-three.component.scss']
})
export class CategoryPageThreeComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}