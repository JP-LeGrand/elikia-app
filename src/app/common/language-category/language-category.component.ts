import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-language-category',
    imports: [RouterLink],
    templateUrl: './language-category.component.html',
    styleUrls: ['./language-category.component.scss']
})
export class LanguageCategoryComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}