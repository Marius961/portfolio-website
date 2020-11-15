import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { MyPrinciplesSectionComponent } from './components/my-principles-section/my-principles-section.component';
import { PrincipleCardComponent } from './components/my-principles-section/principle-card/principle-card.component';
import { TechnologyItemComponent } from './components/section-about/technology-item/technology-item.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectCardComponent } from './components/projects-section/project-card/project-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';



@NgModule({
  declarations: [HomeComponent, NavSectionComponent, MyPrinciplesSectionComponent, PrincipleCardComponent, TechnologyItemComponent, ProjectsSectionComponent, ProjectCardComponent, SectionTitleComponent, SectionContactComponent, SectionMainComponent, SectionAboutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
