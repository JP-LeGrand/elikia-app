import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-make-connections',
    imports: [],
    templateUrl: './make-connections.component.html',
    styleUrls: ['./make-connections.component.scss']
})
export class MakeConnectionsComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}