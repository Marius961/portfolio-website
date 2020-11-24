import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home.component';
import {TechnologyItemComponent} from './components/section-about/technology-item/technology-item.component';
import {ProjectCardComponent} from './components/section-portfolio/project-card/project-card.component';
import {SectionTitleComponent} from './components/section-title/section-title.component';
import {SectionContactComponent} from './components/section-contact/section-contact.component';
import {SectionMainComponent} from './components/section-main/section-main.component';
import {SectionAboutComponent} from './components/section-about/section-about.component';
import {SectionPortfolioComponent} from './components/section-portfolio/section-portfolio.component';
import {HomeNavComponent} from './components/home-nav/home-nav.component';
import {FormsModule} from '@angular/forms';
import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';


@NgModule({
  declarations: [HomeComponent, TechnologyItemComponent, ProjectCardComponent, SectionTitleComponent, SectionContactComponent, SectionMainComponent, SectionAboutComponent, SectionPortfolioComponent, HomeNavComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
