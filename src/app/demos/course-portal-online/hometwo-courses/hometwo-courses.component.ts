import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwo-courses',
    imports: [NgClass, RouterLink],
    templateUrl: './hometwo-courses.component.html',
    styleUrls: ['./hometwo-courses.component.scss']
})
export class HometwoCoursesComponent {
	
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