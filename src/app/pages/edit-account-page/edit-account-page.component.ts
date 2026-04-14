import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-edit-account-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './edit-account-page.component.html',
    styleUrls: ['./edit-account-page.component.scss']
})
export class EditAccountPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}