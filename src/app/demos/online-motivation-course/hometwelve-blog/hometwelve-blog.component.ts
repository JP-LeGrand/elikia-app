import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-blog',
    imports: [RouterLink],
    templateUrl: './hometwelve-blog.component.html',
    styleUrls: ['./hometwelve-blog.component.scss']
})
export class HometwelveBlogComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}