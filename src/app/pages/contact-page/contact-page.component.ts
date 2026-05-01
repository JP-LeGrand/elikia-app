import { Component, inject } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../common/language/language.service';

@Component({
    selector: 'app-contact-page',
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

    lang = inject(LanguageService);

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}
