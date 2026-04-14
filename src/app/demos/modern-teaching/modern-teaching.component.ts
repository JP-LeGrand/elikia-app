import { Component } from '@angular/core';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { OfferComponent } from '../../common/offer/offer.component';
import { InstructorsStyleOneComponent } from '../../common/instructors-style-one/instructors-style-one.component';
import { PartnerStyleTwoComponent } from '../../common/partner-style-two/partner-style-two.component';
import { CategoriesStyleOneComponent } from '../../common/categories-style-one/categories-style-one.component';
import { OurMissionComponent } from '../../common/our-mission/our-mission.component';
import { HomefourCoursesComponent } from './homefour-courses/homefour-courses.component';
import { BoxesComponent } from '../../common/boxes/boxes.component';
import { HomefourMainBannerComponent } from './homefour-main-banner/homefour-main-banner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-modern-teaching',
    imports: [HeaderStyleOneComponent, BecomeInstructorPartnerComponent, BlogComponent, OfferComponent, InstructorsStyleOneComponent, PartnerStyleTwoComponent, CategoriesStyleOneComponent, OurMissionComponent, HomefourCoursesComponent, BoxesComponent, HomefourMainBannerComponent, RouterLink],
    templateUrl: './modern-teaching.component.html',
    styleUrl: './modern-teaching.component.scss'
})
export class ModernTeachingComponent {}