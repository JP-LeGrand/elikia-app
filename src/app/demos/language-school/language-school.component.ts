import { Component } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { LanguageSubscribeComponent } from '../../common/language-subscribe/language-subscribe.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { HowToApplyComponent } from '../../common/how-to-apply/how-to-apply.component';
import { StudentsFeedbackComponent } from '../../common/students-feedback/students-feedback.component';
import { FunfactsStyleTwoComponent } from '../../common/funfacts-style-two/funfacts-style-two.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { LanguageCategoryComponent } from '../../common/language-category/language-category.component';
import { HometenMainBannerComponent } from './hometen-main-banner/hometen-main-banner.component';
import { HeaderStyleFiveComponent } from '../../common/header-style-five/header-style-five.component';
import { HomeeightBlogComponent } from '../business-coaching/homeeight-blog/homeeight-blog.component';
import { HomeeightEventsComponent } from '../business-coaching/homeeight-events/homeeight-events.component';
import { HomeeightCoursesComponent } from '../business-coaching/homeeight-courses/homeeight-courses.component';

@Component({
    selector: 'app-language-school',
    imports: [PartnerStyleOneComponent, LanguageSubscribeComponent, HomeeightBlogComponent, FreeTrialComponent, HomeeightEventsComponent, HowToApplyComponent, StudentsFeedbackComponent, FunfactsStyleTwoComponent, HomeeightCoursesComponent, WhyChooseUsComponent, LanguageCategoryComponent, HometenMainBannerComponent, HeaderStyleFiveComponent],
    templateUrl: './language-school.component.html',
    styleUrl: './language-school.component.scss'
})
export class LanguageSchoolComponent {}