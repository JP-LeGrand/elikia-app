import { Component, OnInit, OnDestroy, afterNextRender, inject } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { LanguageService } from '../../common/language/language.service';
import { TranslationKeys } from '../../common/language/translations/en';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderStyleTwoComponent } from "../../common/header-style-two/header-style-two.component";

type ProgramCategory =
    | 'Adults'
    | 'Companies and Professionals'
    | 'Children and Teenagers';

interface ProgramTab {
    id: string;
    label: string;
    category?: ProgramCategory;
}

@Component({
    selector: 'app-courses-gsoc-three-page',
    imports: [RouterLink, HeaderStyleTwoComponent],
    templateUrl: './courses-gsoc-three-page.component.html',
    styleUrl: './courses-gsoc-three-page.component.scss'
})
export class CoursesGsocThreePageComponent implements OnInit, OnDestroy {

    private paramsSub?: Subscription;
    readonly lang = inject(LanguageService);

    private readonly tabLabelKeys: Record<string, TranslationKeys> = {
        tab1: 'coursesTabAll',
        tab2: 'coursesTabAdults',
        tab3: 'coursesTabCompanies',
        tab4: 'coursesTabChildren',
    };

    tabLabel(id: string): string {
        const key = this.tabLabelKeys[id];
        return key ? this.lang.t(key) : id;
    }

    constructor(
        public themeService: ThemeCustomizerService,
        private route: ActivatedRoute
    ) {
        afterNextRender(() => {
            const params = new URLSearchParams(window.location.search);
            const tab = params.get('tab');
            if (tab && this.tabs.some(t => t.id === tab)) {
                this.currentTab = tab;
            }
        });
    }

    currentTab = 'tab1';

    ngOnInit(): void {
        this.paramsSub = this.route.queryParams.subscribe(params => {
            const tab = params['tab'];
            if (tab && this.tabs.some(t => t.id === tab)) {
                this.currentTab = tab;
            }
        });
    }

    ngOnDestroy(): void {
        this.paramsSub?.unsubscribe();
    }

    readonly tabs: ProgramTab[] = [
        { id: 'tab1', label: 'All' },
        { id: 'tab2', label: 'Adults', category: 'Adults' },
        {
            id: 'tab3',
            label: 'Companies and Professionals',
            category: 'Companies and Professionals'
        },
        {
            id: 'tab4',
            label: 'Children and Teenagers',
            category: 'Children and Teenagers'
        },
    ];

    readonly trainingFormats: string[] = [
        'In-person in Johannesburg and Pretoria',
        'Online, from anywhere',
        'Individual or group sessions',
        'Programs for children, adults, and corporate teams'
    ];

    readonly tabCounts: Record<string, number> = {
        tab1: 8,
        tab2: 2,
        tab3: 3,
        tab4: 3,
    };

    get filteredPrograms() { return []; }

    getTabCount(tab: ProgramTab): number {
        return this.tabCounts[tab.id] ?? 0;
    }

    getStarIcons(rating: number): Array<'full' | 'half' | 'empty'> {
        const stars: Array<'full' | 'half' | 'empty'> = [];
        const full = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;

        for (let i = 0; i < full; i++) stars.push('full');
        if (hasHalf) stars.push('half');
        while (stars.length < 5) stars.push('empty');

        return stars;
    }

    switchTab(event: MouseEvent, tab: string, scrollToTop = false) {
        event.preventDefault();
        this.currentTab = tab;
        if (scrollToTop) {
            // Ensure users land at the top only for tab1 card-driven tab switches.
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 0);
        }
    }

}
