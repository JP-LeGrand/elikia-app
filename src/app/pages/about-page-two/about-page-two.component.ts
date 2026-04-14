import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { PartnerStyleTwoComponent } from '../../common/partner-style-two/partner-style-two.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { InstructorsStyleOneComponent } from '../../common/instructors-style-one/instructors-style-one.component';
import { OurValuesComponent } from '../../common/our-values/our-values.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { OurStoryComponent } from '../../common/our-story/our-story.component';
import { OurMissionComponent } from '../../common/our-mission/our-mission.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-page-two',
    imports: [HeaderStyleThreeComponent, BecomeInstructorPartnerComponent, PartnerStyleTwoComponent, FeedbackStyleOneComponent, InstructorsStyleOneComponent, OurValuesComponent, FunfactsComponent, OurStoryComponent, OurMissionComponent, RouterLink],
    templateUrl: './about-page-two.component.html',
    styleUrls: ['./about-page-two.component.scss']
})
export class AboutPageTwoComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}