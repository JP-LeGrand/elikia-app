import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-orders-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './orders-page.component.html',
    styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}