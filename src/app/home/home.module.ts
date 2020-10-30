import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MyPrinciplesSectionComponent } from './my-principles-section/my-principles-section.component';
import { TechnologiesSectionComponent } from './technologies-section/technologies-section.component';
import { PrincipleCardComponent } from './my-principles-section/principle-card/principle-card.component';
import { TechnologyItemComponent } from './technologies-section/technology-item/technology-item.component';



@NgModule({
  declarations: [HomeComponent, HeaderSectionComponent, NavSectionComponent, AboutMeSectionComponent, MyPrinciplesSectionComponent, TechnologiesSectionComponent, PrincipleCardComponent, TechnologyItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }