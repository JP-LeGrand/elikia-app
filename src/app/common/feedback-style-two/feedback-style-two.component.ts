import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { LanguageService } from '../language/language.service';

interface TestimonialItem {
	image: string;
	title: string;
	text: string;
	name: string;
	role: string;
}

@Component({
    selector: 'app-feedback-style-two',
	imports: [CommonModule, CarouselModule],
    templateUrl: './feedback-style-two.component.html',
    styleUrls: ['./feedback-style-two.component.scss']
})
export class FeedbackStyleTwoComponent {

    readonly lang = inject(LanguageService);

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

	readonly authenticityNotice = {
		en: 'All testimonials presented on this page are authentic and provided by families and learners who have followed our programs.',
		fr: 'Tous les témoignages présentés sur cette page sont authentiques et fournis par les familles et apprenants ayant suivi nos programmes.'
	} as const;

	readonly testimonials: TestimonialItem[] = [
		{
			image: 'images/user1.jpg',
			title: 'Maintaining French Academic Level Abroad / Maintenir le niveau académique français à l\'étranger',
			text: 'Durant deux ans, nos deux petites filles ont été scolarisées en école locale anglophone à Curro Vanderbijlpark et elles ont suivi une formation externe visant à parcourir le programme académique français basé sur le cursus CNED. Nous avons pour cela fait appel à la société Elikia sur recommandation de l\'école française Jules Verne de Johannesburg. La société Elikia a été à notre écoute dès le premier jour et a su répondre à nos attentes, malgré nos contraintes, dans ce mode de fonctionnement relativement atypique. Nos deux filles en terminent avec le CM1 et le CP. Juliette est relativement au point sur les attendus du programme de son niveau. Margot a fortement progressé en lecture et écriture et nous semble prête à réintégrer un niveau CE1 à son retour en France. La disponibilité d\'Elikia fut tout à fait appréciable ainsi que les efforts consentis pour répondre à nos exigences et objectifs. Sur ce point, nous avons apprécié la grande flexibilité offerte afin d\'adapter un enseignement qui soit approprié pour nos deux filles en tenant compte de nos contraintes professionnelles et personnelles.',
			name: 'Sébastien',
			role: 'Parent of 2 students in grade 5 and grade 1'
		},
		{
			image: 'images/user2.jpg',
			title: 'Academic Success Story / Parcours de réussite académique',
			text: 'Elikia played a key role in my daughter\'s academic journey from Grade 8 (4ème) through to Grade 12 (Terminale). Over these years, she benefited from structured, engaging, and highly effective French language instruction. Through Elikia\'s continuous support, she developed strong linguistic skills, confidence in both written and spoken French, and a genuine appreciation for the language and culture. By the end of her studies, she had reached the level required to pursue higher education in a French-speaking environment. Today, she is successfully enrolled at a French-speaking university in France, where she continues to excel academically. I am deeply grateful for Elikia\'s professionalism, commitment, and high-quality teaching. Their support has been instrumental in shaping my daughter\'s academic path and opening doors to international opportunities. I highly recommend Elikia to any student or family seeking long-term academic support and high-quality French instruction.',
			name: 'Myriam',
			role: 'Parent of student (Grade 8 to Grade 12 journey)'
		},
		{
			image: 'images/user3.jpg',
			title: 'Long-Term and Holistic Academic Support',
			text: 'ELIKIA has supported my son from the age of 6 to 14, providing consistent and dedicated academic guidance throughout his educational journey. Over the years, I have seen remarkable progress not only in his mastery of the French language, but also in his ability to apply his knowledge across subjects such as Mathematics and Physical Science. As a non-French-speaking student, this holistic and personalized support has played a key role in his academic development and independent thinking. The tutors demonstrated genuine interest in his overall growth, offering dependable and consistent support, even during holidays. Their long-term commitment has made a significant impact on my son\'s academic journey. I highly recommend ELIKIA as a trusted partner for families navigating the French schooling system.',
			name: 'Dr Nolwandle',
			role: 'Parent of a Grade 10 student at Lycée Français Jules-Verne'
		},
		{
			image: 'images/user4.jpg',
			title: 'Academic Catch-Up and Reintegration / Remise à niveau et réintégration scolaire',
			text: 'Our daughter had been attending an International French School from GS, but after moving to the West Coast of South Africa for two years, she missed out on the French curriculum. Upon returning to Johannesburg, she risked being placed a year behind her peers. ELIKIA designed a condensed, personalized program and paired her with a supportive tutor. Within a few months, she successfully passed the assessment and rejoined her correct grade. Beyond the academic results, she gained confidence and built a strong bond with her tutor. ELIKIA\'s professional, client-focused approach made a significant difference for our family, providing both academic support and emotional encouragement.',
			name: 'Dr Nomakhuze',
			role: 'Parent of a grade 5 student at Lycée Français Jules Verne'
		},
		{
			image: 'images/user5.jpg',
			title: 'Fun and Immersive Learning / Apprentissage ludique et immersif',
			text: 'Our daughter loves the French classes so much, and we are happy to get the lessons from her every week! We know the colors of the rainbow, how to count in French, and now the whole family is even asking questions in French...',
			name: 'Keabetswe',
			role: 'Parent of a grade 0 student at Crawford'
		},
		{
			image: 'images/user6.jpg',
			title: 'Corporate / Employee Support / Accompagnement des entreprises et de leurs employés',
			text: 'When our son joined the French school in CM1 at the age of 8, his only language was Chinese. He didn\'t speak a word of French or even English. Thanks to the dedicated support from ELIKIA, he was able to integrate the Lycée Français Jules Verne and continue his schooling there from Grade 4 to Grade 7, even during the challenging COVID-19 period. We are very glad that our son enjoyed learning French and made such significant progress, which would not have been possible without the guidance and help of the ELIKIA teachers. Thank you very much!',
			name: 'Mr. Guo',
			role: 'Senior Executive at Industrial and Commercial Bank of China (ICBC), parent of a student (Grade 4 to Grade 7 journey at Lycée Français Jules Verne)'
		}
	];

	get noticeText(): string {
		return this.authenticityNotice[this.lang.currentLanguage()];
	}

    testimonialsSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		smartSpeed: 500,
		autoplay: true,
		center: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
    }

}
