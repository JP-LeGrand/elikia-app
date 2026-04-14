import { Component } from '@angular/core';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FeedbackStyleTwoComponent } from '../../common/feedback-style-two/feedback-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { PartnerStyleTwoComponent } from '../../common/partner-style-two/partner-style-two.component';
import { CategoriesStyleTwoComponent } from '../../common/categories-style-two/categories-style-two.component';
import { HomefiveCoursesComponent } from './homefive-courses/homefive-courses.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { HomefiveMainBannerComponent } from './homefive-main-banner/homefive-main-banner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-online-schooling',
    imports: [HeaderStyleOneComponent, BlogComponent, FeedbackStyleTwoComponent, BecomeInstructorPartnerComponent, PartnerStyleTwoComponent, CategoriesStyleTwoComponent, HomefiveCoursesComponent, FunfactsComponent, HomefiveMainBannerComponent, RouterLink],
    templateUrl: './online-schooling.component.html',
    styleUrl: './online-schooling.component.scss'
})
export class OnlineSchoolingComponent {}