import { Component } from '@angular/core';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-category-page-two',
    imports: [HeaderStyleThreeComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './category-page-two.component.html',
    styleUrls: ['./category-page-two.component.scss']
})
export class CategoryPageTwoComponent {}