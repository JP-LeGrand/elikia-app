import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { PartnerStyleTwoComponent } from '../../common/partner-style-two/partner-style-two.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { InstructorsStyleOneComponent } from '../../common/instructors-style-one/instructors-style-one.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { HomesevenCoursesComponent } from './homeseven-courses/homeseven-courses.component';
import { HomesevenMainBannerComponent } from './homeseven-main-banner/homeseven-main-banner.component';

@Component({
    selector: 'app-remote-training-online',
    imports: [HeaderStyleTwoComponent, BecomeInstructorPartnerComponent, PartnerStyleTwoComponent, FeedbackStyleOneComponent, InstructorsStyleOneComponent, HowItWorksComponent, HomesevenCoursesComponent, HomesevenMainBannerComponent],
    templateUrl: './remote-training-online.component.html',
    styleUrl: './remote-training-online.component.scss'
})
export class RemoteTrainingOnlineComponent {}