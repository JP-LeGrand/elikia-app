import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-grid-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './blog-grid-page.component.html',
    styleUrls: ['./blog-grid-page.component.scss']
})
export class BlogGridPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}