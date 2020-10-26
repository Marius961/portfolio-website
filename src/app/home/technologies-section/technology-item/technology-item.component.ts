import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-technology-item[imageSrc][technologyName]',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss']
})
export class TechnologyItemComponent implements OnInit {

  @Input() public imageSrc: string;
  @Input() public technologyName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
