import { Component } from '@angular/core';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { InstructorsStyleOneComponent } from '../../common/instructors-style-one/instructors-style-one.component';
import { PartnerStyleTwoComponent } from '../../common/partner-style-two/partner-style-two.component';
import { OfferComponent } from '../../common/offer/offer.component';
import { CategoriesStyleTwoComponent } from '../../common/categories-style-two/categories-style-two.component';
import { HomethreeCoursesComponent } from './homethree-courses/homethree-courses.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { HomethreeAboutComponent } from './homethree-about/homethree-about.component';
import { FeedbackFormComponent } from '../../common/feedback-form/feedback-form.component';
import { HomethreeMainBannerComponent } from './homethree-main-banner/homethree-main-banner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-distant-learning',
    imports: [HeaderStyleThreeComponent, BlogComponent, BecomeInstructorPartnerComponent, InstructorsStyleOneComponent, PartnerStyleTwoComponent, OfferComponent, CategoriesStyleTwoComponent, HomethreeCoursesComponent, FunfactsComponent, HomethreeAboutComponent, FeedbackFormComponent, HomethreeMainBannerComponent, RouterLink],
    templateUrl: './distant-learning.component.html',
    styleUrl: './distant-learning.component.scss'
})
export class DistantLearningComponent {}