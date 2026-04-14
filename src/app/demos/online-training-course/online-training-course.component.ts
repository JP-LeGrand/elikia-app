import { Component } from '@angular/core';
import { StartFreeCoursesComponent } from '../../common/start-free-courses/start-free-courses.component';
import { InstructorsStyleFourComponent } from '../../common/instructors-style-four/instructors-style-four.component';
import { MakeConnectionsComponent } from '../../common/make-connections/make-connections.component';
import { FreeTrialTwoComponent } from '../../common/free-trial-two/free-trial-two.component';
import { HappyStudentsFeedbackComponent } from '../../common/happy-students-feedback/happy-students-feedback.component';
import { FreeTrialFormComponent } from '../../common/free-trial-form/free-trial-form.component';
import { FunfactsStyleFourComponent } from '../../common/funfacts-style-four/funfacts-style-four.component';
import { HomefourteenAboutComponent } from './homefourteen-about/homefourteen-about.component';
import { FeaturesStyleThreeComponent } from '../../common/features-style-three/features-style-three.component';
import { HomefourteenMainBannerComponent } from './homefourteen-main-banner/homefourteen-main-banner.component';
import { HeaderStyleSevenComponent } from '../../common/header-style-seven/header-style-seven.component';
import { HomethirteenCoursesComponent } from '../online-education-course/homethirteen-courses/homethirteen-courses.component';
import { HomethirteenPopularCoursesComponent } from '../online-education-course/homethirteen-popular-courses/homethirteen-popular-courses.component';

@Component({
    selector: 'app-online-training-course',
    imports: [StartFreeCoursesComponent, InstructorsStyleFourComponent, MakeConnectionsComponent, FreeTrialTwoComponent, HappyStudentsFeedbackComponent, HomethirteenCoursesComponent, FreeTrialFormComponent, FunfactsStyleFourComponent, HomefourteenAboutComponent, HomethirteenPopularCoursesComponent, FeaturesStyleThreeComponent, HomefourteenMainBannerComponent, HeaderStyleSevenComponent],
    templateUrl: './online-training-course.component.html',
    styleUrl: './online-training-course.component.scss'
})
export class OnlineTrainingCourseComponent {}