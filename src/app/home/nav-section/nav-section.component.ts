import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent implements OnInit {

  public isMenuOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
