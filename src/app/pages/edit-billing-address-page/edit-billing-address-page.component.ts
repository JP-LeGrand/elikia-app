import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-billing-address-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './edit-billing-address-page.component.html',
    styleUrls: ['./edit-billing-address-page.component.scss']
})
export class EditBillingAddressPageComponent {}