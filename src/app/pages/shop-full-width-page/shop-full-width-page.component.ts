import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-shop-full-width-page',
    imports: [HeaderStyleThreeComponent, RouterLink],
    templateUrl: './shop-full-width-page.component.html',
    styleUrls: ['./shop-full-width-page.component.scss']
})
export class ShopFullWidthPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}