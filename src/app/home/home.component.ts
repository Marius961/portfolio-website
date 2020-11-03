import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeSection} from './enums/homeSection';

@Component({
  selector: 'pw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("aboutSection", { read: ElementRef }) aboutSection: ElementRef;
  @ViewChild("principlesSection", { read: ElementRef }) principlesSection: ElementRef;
  @ViewChild("technologiesSection", { read: ElementRef }) technologiesSection: ElementRef;
  @ViewChild("projectsSection", { read: ElementRef }) projectsSection: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToSection(homeSection: HomeSection) {
    debugger
    switch (homeSection) {
      case HomeSection.ABOUT_SECTION:
        this.scrollTo(this.aboutSection.nativeElement);
        break;
      case HomeSection.PRIORITIES_SECTION:
        this.scrollTo(this.principlesSection.nativeElement);
        break;
      case HomeSection.TECHNOLOGIES_SECTION:
        this.scrollTo(this.technologiesSection.nativeElement)
        break;
      case HomeSection.PROJECTS_SECTION:
        this.scrollTo(this.projectsSection.nativeElement)
    }
  }

  private scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
