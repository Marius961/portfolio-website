import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HomeSection} from '../../enums/homeSection';

@Component({
  selector: 'pw-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent implements OnInit {

  @Output() sectionSelected: EventEmitter<HomeSection> = new EventEmitter<HomeSection>();

  public isMenuOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public selectSection(sectionName: string): void {
    this.sectionSelected.emit(HomeSection[sectionName]);
  }

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
