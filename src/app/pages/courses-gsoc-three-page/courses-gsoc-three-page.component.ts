import { Component, OnInit, OnDestroy, afterNextRender } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderStyleTwoComponent } from "../../common/header-style-two/header-style-two.component";

type ProgramCategory =
    | 'Adults'
    | 'Companies and Professionals'
    | 'Children and Teenagers'
    | 'DELF / Certification Preparation';

interface ProgramItem {
    image: string;
    category: ProgramCategory;
    authorImage: string;
    authorName: string;
    title: string;
    rating: number;
    ratingCount: number;
    students: number;
    lessons: number;
    price: string;
    oldPrice?: string;
}

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
        {
            id: 'tab5',
            label: 'DELF / Certification Preparation',
            category: 'DELF / Certification Preparation'
        },
        {
            id: 'tab6',
            label: 'Training Formats'
        }
    ];

    readonly trainingFormats: string[] = [
        'In-person in Johannesburg and Pretoria',
        'Online, from anywhere',
        'Individual or group sessions',
        'Programs for children, adults, and corporate teams'
    ];

    readonly programs: ProgramItem[] = [
        {
            image: 'images/courses/courses1.jpg',
            category: 'Adults',
            authorImage: 'images/user1.jpg',
            authorName: 'Steven Smith',
            title: 'Conversational French courses to build confidence and fluency',
            rating: 5,
            ratingCount: 1,
            students: 10,
            lessons: 6,
            price: 'Free'
        },
        {
            image: 'images/courses/courses2.jpg',
            category: 'Children and Teenagers',
            authorImage: 'images/user2.jpg',
            authorName: 'Sarah Taylor',
            title: 'Structured French lessons and preparation for exams/certifications (DELF, IB, GCSE, etc.)',
            rating: 4.5,
            ratingCount: 2,
            students: 15,
            lessons: 10,
            price: '$250'
        },
        {
            image: 'images/courses/courses3.jpg',
            category: 'Companies and Professionals',
            authorImage: 'images/user3.jpg',
            authorName: 'James Anderson',
            title: 'Tailored French language training for businesses and professionals dealing with Francophone Africa',
            rating: 4,
            ratingCount: 1,
            students: 5,
            lessons: 5,
            price: '$150'
        },
        {
            image: 'images/courses/courses4.jpg',
            category: 'Children and Teenagers',
            authorImage: 'images/user4.jpg',
            authorName: 'Liam King',
            title: 'French Fun Clubs to explore French through playful and interactive activities',
            rating: 5,
            ratingCount: 1,
            students: 10,
            lessons: 6,
            price: '$195',
            oldPrice: '$200'
        },
        {
            image: 'images/courses/courses5.jpg',
            category: 'Companies and Professionals',
            authorImage: 'images/user5.jpg',
            authorName: "Lina D'Souza",
            title: 'Courses designed to meet specific team or sector needs',
            rating: 5,
            ratingCount: 1,
            students: 10,
            lessons: 6,
            price: '$178'
        },
        {
            image: 'images/courses/courses6.jpg',
            category: 'Adults',
            authorImage: 'images/user6.jpg',
            authorName: 'David Warner',
            title: 'Preparation for official certifications (DELF, TEF, TCF)',
            rating: 5,
            ratingCount: 1,
            students: 10,
            lessons: 6,
            price: '$500'
        },
        {
            image: 'images/courses/courses1.jpg',
            category: 'Children and Teenagers',
            authorImage: 'images/user1.jpg',
            authorName: 'Steven Smith',
            title: 'Academic support from kindergarten to high school, for students enrolled in French schools or wanting to stay aligned with the French national curriculum',
            rating: 5,
            ratingCount: 1,
            students: 10,
            lessons: 6,
            price: 'Free'
        },
        {
            image: 'images/courses/courses2.jpg',
            category: 'DELF / Certification Preparation',
            authorImage: 'images/user2.jpg',
            authorName: 'Sarah Taylor',
            title: 'Comprehensive DELF and certification preparation pathway',
            rating: 4.5,
            ratingCount: 2,
            students: 15,
            lessons: 10,
            price: '$250'
        },
        {
            image: 'images/courses/courses3.jpg',
            category: 'Companies and Professionals',
            authorImage: 'images/user3.jpg',
            authorName: 'James Anderson',
            title: 'On-site training in Johannesburg and Pretoria or online',
            rating: 4,
            ratingCount: 1,
            students: 5,
            lessons: 5,
            price: '$150'
        }
    ];

    get filteredPrograms(): ProgramItem[] {
        const selectedTab = this.tabs.find((tab) => tab.id === this.currentTab);
        if (!selectedTab || !selectedTab.category) {
            return this.programs;
        }
        return this.programs.filter((program) => program.category === selectedTab.category);
    }

    getTabCount(tab: ProgramTab): number {
        if (tab.id === 'tab6') {
            return this.trainingFormats.length;
        }
        if (!tab.category) {
            return this.programs.length;
        }
        return this.programs.filter((program) => program.category === tab.category).length;
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

    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
