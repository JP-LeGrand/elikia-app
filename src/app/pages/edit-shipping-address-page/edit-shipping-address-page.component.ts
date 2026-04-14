import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-shipping-address-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './edit-shipping-address-page.component.html',
    styleUrls: ['./edit-shipping-address-page.component.scss']
})
export class EditShippingAddressPageComponent {}