import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-full-width-page',
    imports: [HeaderStyleOneComponent, RouterLink],
    templateUrl: './blog-full-width-page.component.html',
    styleUrls: ['./blog-full-width-page.component.scss']
})
export class BlogFullWidthPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}