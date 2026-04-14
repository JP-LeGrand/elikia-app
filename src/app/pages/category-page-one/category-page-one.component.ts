import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-category-page-one',
    imports: [HeaderStyleTwoComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './category-page-one.component.html',
    styleUrls: ['./category-page-one.component.scss']
})
export class CategoryPageOneComponent {}