import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../common/language/language.service';

@Component({
    selector: 'app-hometwo-about',
    imports: [RouterLink],
    templateUrl: './hometwo-about.component.html',
    styleUrls: ['./hometwo-about.component.scss']
})
export class HometwoAboutComponent {
    readonly lang = inject(LanguageService);
}
