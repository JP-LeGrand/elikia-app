import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-trending-categories',
    imports: [RouterLink],
    templateUrl: './trending-categories.component.html',
    styleUrls: ['./trending-categories.component.scss']
})
export class TrendingCategoriesComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}