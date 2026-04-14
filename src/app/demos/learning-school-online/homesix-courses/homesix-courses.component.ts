import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homesix-courses',
    imports: [NgClass, RouterLink],
    templateUrl: './homesix-courses.component.html',
    styleUrls: ['./homesix-courses.component.scss']
})
export class HomesixCoursesComponent {
	
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