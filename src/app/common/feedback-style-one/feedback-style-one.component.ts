import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

interface TestimonialItem {
    title: string;
    text: string;
    name: string;
    role: string;
}

@Component({
    selector: 'app-feedback-style-one',
    imports: [CommonModule, CarouselModule, RouterLink],
    templateUrl: './feedback-style-one.component.html',
    styleUrls: ['./feedback-style-one.component.scss']
})
export class FeedbackStyleOneComponent {

    constructor(
        public themeService: ThemeCustomizerService
    ) {}

    readonly testimonials: TestimonialItem[] = [
        {
            title: 'Maintaining French Academic Level Abroad',
            text: 'Durant deux ans, nos deux petites filles ont été scolarisées en école locale anglophone à Curro Vanderbijlpark et elles ont suivi une formation externe visant à parcourir le programme académique français basé sur le cursus CNED. Nous avons pour cela fait appel à la société Elikia sur recommandation de l\'école française Jules Verne de Johannesburg. La société Elikia a été à notre écoute dès le premier jour et a su répondre à nos attentes, malgré nos contraintes, dans ce mode de fonctionnement relativement atypique.',
            name: 'Sébastien',
            role: 'Parent of 2 students in grade 5 and grade 1'
        },
        {
            title: 'Academic Success Story',
            text: 'Elikia played a key role in my daughter\'s academic journey from Grade 8 through to Grade 12. Through Elikia\'s continuous support, she developed strong linguistic skills, confidence in both written and spoken French, and a genuine appreciation for the language and culture. Today, she is successfully enrolled at a French-speaking university in France. I highly recommend Elikia to any student or family seeking long-term academic support and high-quality French instruction.',
            name: 'Myriam',
            role: 'Parent of student (Grade 8 to Grade 12 journey)'
        },
        {
            title: 'Long-Term and Holistic Academic Support',
            text: 'ELIKIA has supported my son from the age of 6 to 14, providing consistent and dedicated academic guidance throughout his educational journey. Over the years, I have seen remarkable progress not only in his mastery of the French language, but also in his ability to apply his knowledge across subjects such as Mathematics and Physical Science. I highly recommend ELIKIA as a trusted partner for families navigating the French schooling system.',
            name: 'Dr Nolwandle',
            role: 'Parent of a Grade 10 student at Lycée Français Jules-Verne'
        },
        {
            title: 'Fun and Immersive Learning',
            text: 'Our daughter loves the French classes so much, and we are happy to get the lessons from her every week! We know the colors of the rainbow, how to count in French, and now the whole family is even asking questions in French...',
            name: 'Keabetswe',
            role: 'Parent of a grade 0 student at Crawford'
        },
        {
            title: 'Corporate / Employee Support',
            text: 'When our son joined the French school in CM1 at the age of 8, his only language was Chinese. Thanks to the dedicated support from ELIKIA, he was able to integrate the Lycée Français Jules Verne and continue his schooling there from Grade 4 to Grade 7. We are very glad that our son enjoyed learning French and made such significant progress, which would not have been possible without the guidance and help of the ELIKIA teachers. Thank you very much!',
            name: 'Mr. Guo',
            role: 'Senior Executive at ICBC, parent of a student at Lycée Français Jules Verne'
        }
    ];

    feedbackSlides: OwlOptions = {
        nav: true,
        loop: true,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        mouseDrag: false,
        smartSpeed: 500,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ]
    }

}
