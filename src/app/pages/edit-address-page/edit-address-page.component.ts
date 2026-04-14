import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-address-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './edit-address-page.component.html',
    styleUrls: ['./edit-address-page.component.scss']
})
export class EditAddressPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}