import { Component } from '@angular/core';
import { HealthSubscribeComponent } from '../../common/health-subscribe/health-subscribe.component';
import { HomenineBlogComponent } from './homenine-blog/homenine-blog.component';
import { HomenineEventsComponent } from './homenine-events/homenine-events.component';
import { HealthQuoteComponent } from '../../common/health-quote/health-quote.component';
import { HomenineCoursesComponent } from './homenine-courses/homenine-courses.component';
import { HealthProgramComponent } from '../../common/health-program/health-program.component';
import { HealthExperienceComponent } from '../../common/health-experience/health-experience.component';
import { FeaturesStyleTwoComponent } from '../../common/features-style-two/features-style-two.component';
import { HomenineMainBannerComponent } from './homenine-main-banner/homenine-main-banner.component';
import { HeaderStyleFiveComponent } from '../../common/header-style-five/header-style-five.component';

@Component({
    selector: 'app-health-coaching',
    imports: [HealthSubscribeComponent, HomenineBlogComponent, HomenineEventsComponent, HealthQuoteComponent, HomenineCoursesComponent, HealthProgramComponent, HealthExperienceComponent, FeaturesStyleTwoComponent, HomenineMainBannerComponent, HeaderStyleFiveComponent],
    templateUrl: './health-coaching.component.html',
    styleUrl: './health-coaching.component.scss'
})
export class HealthCoachingComponent {}