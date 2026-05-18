import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { ThemeCustomizerService } from './common/theme-customizer/theme-customizer.service';
import { Meta, Title } from '@angular/platform-browser';
import { ThemeCustomizerComponent } from './common/theme-customizer/theme-customizer.component';
import { LanguageService } from './common/language/language.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, ThemeCustomizerComponent, FooterComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    protected readonly title = signal('Elikia French4All');
    readonly lang = inject(LanguageService);

    private previousUrl: string | null = null;

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller,
        public themeService: ThemeCustomizerService,
        private meta: Meta,
        private titleService: Title
    ) {
        effect(() => {
            this.lang.currentLanguage();
            this.updateSeoTags();
        });

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                const currentUrl = event.urlAfterRedirects;
                // Scroll to top ONLY if navigating to a different route (not on refresh)
                if (this.previousUrl && this.previousUrl !== currentUrl) {
                    this.viewportScroller.scrollToPosition([0, 0]);
                }
                this.previousUrl = currentUrl;
                this.updateSeoTags();
            }
        });
    }

    private updateSeoTags(): void {
        this.titleService.setTitle(this.lang.t('seoTitle'));

        this.meta.updateTag({ name: 'description', content: this.lang.t('seoDescription') });
        this.meta.updateTag({ name: 'keywords', content: this.lang.t('seoKeywords') });
        this.meta.updateTag({ name: 'author', content: this.lang.t('seoAuthor') });

        this.meta.updateTag({ property: 'og:title', content: this.lang.t('seoOgTitle') });
        this.meta.updateTag({ property: 'og:description', content: this.lang.t('seoOgDescription') });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Elikia French4All' });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: this.lang.t('seoTwitterTitle') });
        this.meta.updateTag({ name: 'twitter:description', content: this.lang.t('seoTwitterDescription') });

        this.meta.updateTag({
            httpEquiv: 'Content-Language',
            content: this.lang.currentLanguage() === 'fr' ? 'fr-FR' : 'en-US'
        });

        this.meta.updateTag({
            name: 'robots',
            content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        });
        this.meta.updateTag({ name: 'googlebot', content: 'index, follow' });
        this.meta.updateTag({ name: 'subject', content: this.lang.t('seoSubject') });
    }

}
