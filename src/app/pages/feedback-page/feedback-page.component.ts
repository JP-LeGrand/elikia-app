import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { OurMissionComponent } from '../../common/our-mission/our-mission.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { FeedbackStyleTwoComponent } from '../../common/feedback-style-two/feedback-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-feedback-page',
    imports: [HeaderStyleTwoComponent, OurMissionComponent, FeedbackStyleOneComponent, FeedbackStyleTwoComponent, RouterLink],
    templateUrl: './feedback-page.component.html',
    styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent {}