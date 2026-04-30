import { Component, inject } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
    selector: 'app-our-story',
    imports: [],
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {

    readonly lang = inject(LanguageService);

}
