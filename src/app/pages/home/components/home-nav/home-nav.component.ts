import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HomeSection} from '../../enums/homeSection';

@Component({
  selector: 'pw-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  @Output() sectionSelected: EventEmitter<HomeSection> = new EventEmitter<HomeSection>();

  public isMenuOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public selectSection(sectionName: string): void {
    this.isMenuOpened = false;
    this.sectionSelected.emit(HomeSection[sectionName]);
  }

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
