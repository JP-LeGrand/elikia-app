import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-shop-grid-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './shop-grid-page.component.html',
    styleUrls: ['./shop-grid-page.component.scss']
})
export class ShopGridPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}