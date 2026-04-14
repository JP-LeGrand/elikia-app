import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { PartnerStyleTwoComponent } from '../../common/partner-style-two/partner-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-partner-page',
    imports: [HeaderStyleTwoComponent, FeedbackStyleOneComponent, PartnerStyleOneComponent, PartnerStyleTwoComponent, RouterLink],
    templateUrl: './partner-page.component.html',
    styleUrls: ['./partner-page.component.scss']
})
export class PartnerPageComponent {}