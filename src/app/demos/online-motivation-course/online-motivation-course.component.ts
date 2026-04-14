import { Component } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { HometwelveBlogComponent } from './hometwelve-blog/hometwelve-blog.component';
import { DiscoverEdnuvComponent } from '../../common/discover-ednuv/discover-ednuv.component';
import { InstructorsStyleFourComponent } from '../../common/instructors-style-four/instructors-style-four.component';
import { OurGrowthComponent } from '../../common/our-growth/our-growth.component';
import { HometwelveCoursesComponent } from './hometwelve-courses/hometwelve-courses.component';
import { HometwelveAboutComponent } from './hometwelve-about/hometwelve-about.component';
import { TrendingCategoriesComponent } from '../../common/trending-categories/trending-categories.component';
import { HometwelvePopularCoursesComponent } from './hometwelve-popular-courses/hometwelve-popular-courses.component';
import { HometwelveMainBannerComponent } from './hometwelve-main-banner/hometwelve-main-banner.component';
import { HeaderStyleSevenComponent } from '../../common/header-style-seven/header-style-seven.component';

@Component({
    selector: 'app-online-motivation-course',
    imports: [PartnerStyleOneComponent, HometwelveBlogComponent, DiscoverEdnuvComponent, InstructorsStyleFourComponent, OurGrowthComponent, HometwelveCoursesComponent, HometwelveAboutComponent, TrendingCategoriesComponent, HometwelvePopularCoursesComponent, HometwelveMainBannerComponent, HeaderStyleSevenComponent],
    templateUrl: './online-motivation-course.component.html',
    styleUrl: './online-motivation-course.component.scss'
})
export class OnlineMotivationCourseComponent {}