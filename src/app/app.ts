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
                this.titleService.setTitle('Elikia French4All | Learn French Online | Apprenez le Français');

                // Meta Description
                this.meta.updateTag({
                    name: 'description',
                    content: 'Elikia French4All - Master French online with expert teachers, interactive lessons, and live practice. Beginners to advanced. Affordable courses, lifetime access, and community support. Start learning French today! | Elikia French4All - Maîtrisez le français en ligne avec des professeurs experts, des leçons interactives et la pratique en direct. Du débutant à avancé. Cours abordables, accès à vie et soutien communautaire. Commencez à apprendre le français dès maintenant!'
                });

                // Comprehensive Keywords in English and French
                this.meta.updateTag({
                    name: 'keywords',
                    content: 'learn French online, French language courses, online French lessons, French for beginners, advanced French, French grammar, French vocabulary, French conversation, French pronunciation, French culture, French teacher, language learning, interactive French lessons, French language school, French exam prep, DELF DALF preparation, French speaking practice, French writing, French listening, French reading, language education, affordable French courses, flexible learning, language skills, bilingual learning, French immersion, language mastery, speak French fluently, French communication, language proficiency, Elikia, French4All, cours de français en ligne, apprendre le français, leçons de français, français pour débutants, français avancé, grammaire française, vocabulaire français, conversation française, prononciation française, culture française, professeur de français, école de langues, leçons françaises interactives, préparation aux examens DELF DALF, pratique de la parole française, rédaction française, écoute française, lecture française, enseignement des langues, cours de français abordables, apprentissage flexible, compétences linguistiques, apprentissage bilingue, immersion française, maîtrise des langues, parler français couramment, communication française, compétence linguistique'
                });

                // Author
                this.meta.updateTag({
                    name: 'author',
                    content: 'Elikia French4All Team'
                });

                // Open Graph Tags for Social Media
                this.meta.updateTag({
                    property: 'og:title',
                    content: 'Elikia French4All - Master French Online | Maîtrisez le Français'
                });

                this.meta.updateTag({
                    property: 'og:description',
                    content: 'Transform your French learning journey with Elikia French4All. Expert teachers, interactive lessons, and affordable courses for all levels. | Transformez votre parcours d\'apprentissage du français avec Elikia French4All. Professeurs experts, leçons interactives et cours abordables pour tous les niveaux.'
                });

                this.meta.updateTag({
                    property: 'og:type',
                    content: 'website'
                });

                this.meta.updateTag({
                    property: 'og:site_name',
                    content: 'Elikia French4All'
                });

                // Twitter Card Tags
                this.meta.updateTag({
                    name: 'twitter:card',
                    content: 'summary_large_image'
                });

                this.meta.updateTag({
                    name: 'twitter:title',
                    content: 'Elikia French4All - Learn French Online'
                });

                this.meta.updateTag({
                    name: 'twitter:description',
                    content: 'Learn French with expert teachers and interactive lessons. Start your journey with Elikia French4All today!'
                });

                // Language Meta Tag
                this.meta.updateTag({
                    httpEquiv: 'Content-Language',
                    content: 'en-US, fr-FR'
                });

                // Additional SEO Tags
                this.meta.updateTag({
                    name: 'robots',
                    content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
                });

                this.meta.updateTag({
                    name: 'googlebot',
                    content: 'index, follow'
                });

                this.meta.updateTag({
                    name: 'subject',
                    content: 'Online French Language Learning Platform'
                });
            }
        });
    }

}
