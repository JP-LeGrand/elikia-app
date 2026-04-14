import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeeight-blog',
    imports: [RouterLink],
    templateUrl: './homeeight-blog.component.html',
    styleUrls: ['./homeeight-blog.component.scss']
})
export class HomeeightBlogComponent {
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {}

}