import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethree-courses',
    imports: [NgClass, RouterLink],
    templateUrl: './homethree-courses.component.html',
    styleUrls: ['./homethree-courses.component.scss']
})
export class HomethreeCoursesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}