import { Component, inject } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
    selector: 'app-funfacts',
    imports: [],
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent {
    readonly lang = inject(LanguageService);
}
