import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderSectionComponent } from './header-section/header-section.component';



@NgModule({
  declarations: [HomeComponent, HeaderSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
