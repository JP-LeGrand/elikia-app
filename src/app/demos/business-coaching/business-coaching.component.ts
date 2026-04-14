import { Component } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { PremiumAccessComponent } from '../../common/premium-access/premium-access.component';
import { HomeeightBlogComponent } from './homeeight-blog/homeeight-blog.component';
import { HomeeightEventsComponent } from './homeeight-events/homeeight-events.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { FunfactsFeedbackComponent } from '../../common/funfacts-feedback/funfacts-feedback.component';
import { HomeeightCoursesComponent } from './homeeight-courses/homeeight-courses.component';
import { HomeeightAboutComponent } from './homeeight-about/homeeight-about.component';
import { ServicesComponent } from '../../common/services/services.component';
import { HomeeightMainBannerComponent } from './homeeight-main-banner/homeeight-main-banner.component';
import { HeaderStyleFiveComponent } from '../../common/header-style-five/header-style-five.component';

@Component({
    selector: 'app-business-coaching',
    imports: [PartnerStyleOneComponent, PremiumAccessComponent, HomeeightBlogComponent, HomeeightEventsComponent, FaqComponent, FunfactsFeedbackComponent, HomeeightCoursesComponent, HomeeightAboutComponent, ServicesComponent, HomeeightMainBannerComponent, HeaderStyleFiveComponent],
    templateUrl: './business-coaching.component.html',
    styleUrl: './business-coaching.component.scss'
})
export class BusinessCoachingComponent {}