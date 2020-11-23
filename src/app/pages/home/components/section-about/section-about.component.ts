import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HomeSection} from '../../enums/homeSection';

@Component({
  selector: 'pw-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent implements OnInit {

  @Output() sectionSelected: EventEmitter<HomeSection> = new EventEmitter<HomeSection>();

  constructor() { }

  ngOnInit(): void {
  }

  selectContactSection(): void {
    this.sectionSelected.emit(HomeSection.SECTION_CONTACT);
  }
}
