import { Component, inject } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { HometwoMainBannerComponent } from './hometwo-main-banner/hometwo-main-banner.component';
import { HometwoAboutComponent } from './hometwo-about/hometwo-about.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { OurMissionComponent } from '../../common/our-mission/our-mission.component';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { LanguageCategoryComponent } from '../../common/language-category/language-category.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { LanguageService } from '../../common/language/language.service';
import { FeedbackStyleOneComponent } from "../../common/feedback-style-one/feedback-style-one.component";

@Component({
    selector: 'app-course-portal-online',
    imports: [
    HeaderStyleTwoComponent,
    HometwoMainBannerComponent,
    HometwoAboutComponent,
    FunfactsComponent,
    OurMissionComponent,
    PartnerStyleOneComponent,
    LanguageCategoryComponent,
    BecomeInstructorPartnerComponent,
    FeedbackStyleOneComponent
],
    templateUrl: './course-portal-online.component.html',
    styleUrl: './course-portal-online.component.scss',
})
export class CoursePortalOnlineComponent {
    readonly lang = inject(LanguageService);
}
