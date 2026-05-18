import { Component, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { ThemeCustomizerService } from './common/theme-customizer/theme-customizer.service';
import { Meta, Title } from '@angular/platform-browser';
import { ThemeCustomizerComponent } from './common/theme-customizer/theme-customizer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, ThemeCustomizerComponent, FooterComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    protected readonly title = signal('Elikia French4All');

    private previousUrl: string | null = null;

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller,
        public themeService: ThemeCustomizerService,
        private meta: Meta,
        private titleService: Title
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                const currentUrl = event.urlAfterRedirects;
                // Scroll to top ONLY if navigating to a different route (not on refresh)
                if (this.previousUrl && this.previousUrl !== currentUrl) {
                    this.viewportScroller.scrollToPosition([0, 0]);
                }
                this.previousUrl = currentUrl;

                // Set dynamic meta tags and title (customize per route as needed)
                this.titleService.setTitle('Elikia French4All');
                this.meta.updateTag({ name: 'description', content: 'Elikia French4All offers comprehensive online French courses for all levels. Learn French with expert teachers, interactive lessons, and a supportive community. Start your French learning journey today!' });
                this.meta.updateTag({ name: 'keywords', content: 'French learning, online French courses, language school, French for all, Elikia, French classes, French lessons, French teacher, learn French online, French education, French language, French grammar, French vocabulary, French speaking, French culture, French beginners, advanced French, French tutoring, French practice, French conversation, French exam preparation' });
            }
        });
    }

}
