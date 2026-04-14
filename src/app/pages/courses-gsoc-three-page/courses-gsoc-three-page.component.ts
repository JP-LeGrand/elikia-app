import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gsoc-three-page',
    imports: [HeaderStyleThreeComponent, RouterLink],
    templateUrl: './courses-gsoc-three-page.component.html',
    styleUrl: './courses-gsoc-three-page.component.scss'
})
export class CoursesGsocThreePageComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}