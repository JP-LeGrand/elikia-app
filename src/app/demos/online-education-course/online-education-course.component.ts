import { Component } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { HappyStudentsFeedbackComponent } from '../../common/happy-students-feedback/happy-students-feedback.component';
import { BecomePartnerTeacherComponent } from '../../common/become-partner-teacher/become-partner-teacher.component';
import { InstructorsStyleFourComponent } from '../../common/instructors-style-four/instructors-style-four.component';
import { MakeConnectionsComponent } from '../../common/make-connections/make-connections.component';
import { HomethirteenCoursesComponent } from './homethirteen-courses/homethirteen-courses.component';
import { HomethirteenAboutComponent } from './homethirteen-about/homethirteen-about.component';
import { FeaturesStyleThreeComponent } from '../../common/features-style-three/features-style-three.component';
import { HomethirteenPopularCoursesComponent } from './homethirteen-popular-courses/homethirteen-popular-courses.component';
import { HomethirteenMainBannerComponent } from './homethirteen-main-banner/homethirteen-main-banner.component';
import { HeaderStyleSevenComponent } from '../../common/header-style-seven/header-style-seven.component';
import { HometwelveBlogComponent } from '../online-motivation-course/hometwelve-blog/hometwelve-blog.component';

@Component({
    selector: 'app-online-education-course',
    imports: [PartnerStyleOneComponent, HometwelveBlogComponent, HappyStudentsFeedbackComponent, BecomePartnerTeacherComponent, InstructorsStyleFourComponent, MakeConnectionsComponent, HomethirteenCoursesComponent, HomethirteenAboutComponent, FeaturesStyleThreeComponent, HomethirteenPopularCoursesComponent, HomethirteenMainBannerComponent, HeaderStyleSevenComponent],
    templateUrl: './online-education-course.component.html',
    styleUrl: './online-education-course.component.scss'
})
export class OnlineEducationCourseComponent {}