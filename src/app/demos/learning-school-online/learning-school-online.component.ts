import { Component } from '@angular/core';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { InstructorsStyleThreeComponent } from '../../common/instructors-style-three/instructors-style-three.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { HomesixCoursesComponent } from './homesix-courses/homesix-courses.component';
import { CategoriesStyleThreeComponent } from '../../common/categories-style-three/categories-style-three.component';
import { HomesixMainBannerComponent } from './homesix-main-banner/homesix-main-banner.component';
import { HeaderStyleFourComponent } from '../../common/header-style-four/header-style-four.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-learning-school-online',
    imports: [BecomeInstructorPartnerComponent, FeedbackStyleOneComponent, InstructorsStyleThreeComponent, FunfactsComponent, FeaturesComponent, HomesixCoursesComponent, CategoriesStyleThreeComponent, HomesixMainBannerComponent, HeaderStyleFourComponent, RouterLink],
    templateUrl: './learning-school-online.component.html',
    styleUrl: './learning-school-online.component.scss'
})
export class LearningSchoolOnlineComponent {}