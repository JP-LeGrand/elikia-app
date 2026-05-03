import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { LanguageService } from '../language/language.service';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, BackToTopComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    lang = inject(LanguageService);
}
