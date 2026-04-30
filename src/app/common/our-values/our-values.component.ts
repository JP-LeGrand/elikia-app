import { Component, inject } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
    selector: 'app-our-values',
    imports: [],
    templateUrl: './our-values.component.html',
    styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent {

    readonly lang = inject(LanguageService);

}
