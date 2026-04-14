import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-discover-ednuv',
    imports: [],
    templateUrl: './discover-ednuv.component.html',
    styleUrls: ['./discover-ednuv.component.scss']
})
export class DiscoverEdnuvComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}