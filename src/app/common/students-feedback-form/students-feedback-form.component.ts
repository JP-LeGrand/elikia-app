import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-students-feedback-form',
    imports: [],
    templateUrl: './students-feedback-form.component.html',
    styleUrls: ['./students-feedback-form.component.scss']
})
export class StudentsFeedbackFormComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}