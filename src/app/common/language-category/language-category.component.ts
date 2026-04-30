import { Component, inject } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language/language.service';

@Component({
    selector: 'app-language-category',
    imports: [RouterLink],
    templateUrl: './language-category.component.html',
    styleUrls: ['./language-category.component.scss']
})
export class LanguageCategoryComponent {

    readonly lang = inject(LanguageService);

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}
