import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { MyPrinciplesSectionComponent } from './components/my-principles-section/my-principles-section.component';
import { TechnologiesSectionComponent } from './components/technologies-section/technologies-section.component';
import { PrincipleCardComponent } from './components/my-principles-section/principle-card/principle-card.component';
import { TechnologyItemComponent } from './components/technologies-section/technology-item/technology-item.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectCardComponent } from './components/projects-section/project-card/project-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';



@NgModule({
  declarations: [HomeComponent, HeaderSectionComponent, NavSectionComponent, AboutMeSectionComponent, MyPrinciplesSectionComponent, TechnologiesSectionComponent, PrincipleCardComponent, TechnologyItemComponent, ProjectsSectionComponent, ProjectCardComponent, SectionTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
