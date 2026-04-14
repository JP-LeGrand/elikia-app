import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homenine-blog',
    imports: [RouterLink],
    templateUrl: './homenine-blog.component.html',
    styleUrls: ['./homenine-blog.component.scss']
})
export class HomenineBlogComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}