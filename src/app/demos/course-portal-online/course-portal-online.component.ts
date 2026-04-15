import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { HometwoMainBannerComponent } from './hometwo-main-banner/hometwo-main-banner.component';
import { HometwoAboutComponent } from './hometwo-about/hometwo-about.component';
import { CategoriesStyleOneComponent } from '../../common/categories-style-one/categories-style-one.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { HometwoCoursesComponent } from './hometwo-courses/hometwo-courses.component';
import { OurMissionComponent } from '../../common/our-mission/our-mission.component';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { InstructorsStyleTwoComponent } from '../../common/instructors-style-two/instructors-style-two.component';
import { StudentsFeedbackFormComponent } from '../../common/students-feedback-form/students-feedback-form.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { WebinarCountdownComponent } from '../../common/webinar-countdown/webinar-countdown.component';
import { RouterLink } from '@angular/router';
import { LanguageCategoryComponent } from "../../common/language-category/language-category.component";
import { BecomeInstructorPartnerComponent } from "../../common/become-instructor-partner/become-instructor-partner.component";

@Component({
    selector: 'app-course-portal-online',
    imports: [HeaderStyleTwoComponent, HometwoMainBannerComponent, HometwoAboutComponent, CategoriesStyleOneComponent, FunfactsComponent, HometwoCoursesComponent, OurMissionComponent, PartnerStyleOneComponent, InstructorsStyleTwoComponent, StudentsFeedbackFormComponent, BlogComponent, WebinarCountdownComponent, RouterLink, LanguageCategoryComponent, BecomeInstructorPartnerComponent],
    templateUrl: './course-portal-online.component.html',
    styleUrl: './course-portal-online.component.scss'
})
export class CoursePortalOnlineComponent {}
