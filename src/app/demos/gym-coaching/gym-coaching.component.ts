import { Component } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { HomeelevenBlogComponent } from './homeeleven-blog/homeeleven-blog.component';
import { AppDownloadComponent } from '../../common/app-download/app-download.component';
import { GymTrainerComponent } from '../../common/gym-trainer/gym-trainer.component';
import { GymFeedbackComponent } from '../../common/gym-feedback/gym-feedback.component';
import { FunfactsStyleThreeComponent } from '../../common/funfacts-style-three/funfacts-style-three.component';
import { HomeelevenCoursesComponent } from './homeeleven-courses/homeeleven-courses.component';
import { WhyChooseUsTwoComponent } from '../../common/why-choose-us-two/why-choose-us-two.component';
import { GymFeaturesComponent } from '../../common/gym-features/gym-features.component';
import { HomeelevenMainBannerComponent } from './homeeleven-main-banner/homeeleven-main-banner.component';
import { HeaderStyleSixComponent } from '../../common/header-style-six/header-style-six.component';

@Component({
    selector: 'app-gym-coaching',
    imports: [PartnerStyleOneComponent, GetStartedComponent, HomeelevenBlogComponent, AppDownloadComponent, GymTrainerComponent, GymFeedbackComponent, FunfactsStyleThreeComponent, HomeelevenCoursesComponent, WhyChooseUsTwoComponent, GymFeaturesComponent, HomeelevenMainBannerComponent, HeaderStyleSixComponent],
    templateUrl: './gym-coaching.component.html',
    styleUrl: './gym-coaching.component.scss'
})
export class GymCoachingComponent {}