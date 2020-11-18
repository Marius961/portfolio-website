import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { MyPrinciplesSectionComponent } from './components/my-principles-section/my-principles-section.component';
import { PrincipleCardComponent } from './components/my-principles-section/principle-card/principle-card.component';
import { TechnologyItemComponent } from './components/section-about/technology-item/technology-item.component';
import { ProjectCardComponent } from './components/section-portfolio/project-card/project-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionPortfolioComponent } from './components/section-portfolio/section-portfolio.component';



@NgModule({
  declarations: [HomeComponent, NavSectionComponent, MyPrinciplesSectionComponent, PrincipleCardComponent, TechnologyItemComponent, ProjectCardComponent, SectionTitleComponent, SectionContactComponent, SectionMainComponent, SectionAboutComponent, SectionPortfolioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
