import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-right-sidebar-page',
    imports: [HeaderStyleThreeComponent, RouterLink],
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}