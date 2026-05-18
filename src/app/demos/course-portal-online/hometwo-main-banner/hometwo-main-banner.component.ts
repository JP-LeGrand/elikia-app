import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../common/language/language.service';
import { inject } from '@angular/core';

@Component({
    selector: 'app-hometwo-main-banner',
	imports: [RouterLink],
    templateUrl: './hometwo-main-banner.component.html',
    styleUrls: ['./hometwo-main-banner.component.scss']
})
export class HometwoMainBannerComponent {

    /** Expose service publicly so templates call lang.t('key') directly */
    readonly lang = inject(LanguageService);

}
