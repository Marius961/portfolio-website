import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeSection} from './enums/homeSection';

@Component({
  selector: 'pw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("sectionMain", { read: ElementRef }) sectionMain: ElementRef;
  @ViewChild("sectionAbout", { read: ElementRef }) sectionAbout: ElementRef;
  @ViewChild("sectionPortfolio", { read: ElementRef }) sectionPortfolio: ElementRef;
  @ViewChild("sectionContact", { read: ElementRef }) sectionContact: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToSection(homeSection: HomeSection) {
    switch (homeSection) {
      case HomeSection.SECTION_MAIN:
        this.scrollTo(this.sectionMain.nativeElement);
        break;
      case HomeSection.SECTION_ABOUT:
        this.scrollTo(this.sectionAbout.nativeElement);
        break;
      case HomeSection.SECTION_PORTFOLIO:
        this.scrollTo(this.sectionPortfolio.nativeElement);
        break;
      case HomeSection.SECTION_CONTACT:
        this.scrollTo(this.sectionContact.nativeElement)
    }
  }

  private scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
