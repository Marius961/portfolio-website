import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input() public headerStyle: "dark" | "light" = "dark";

  constructor() { }

  ngOnInit(): void {
  }

}
