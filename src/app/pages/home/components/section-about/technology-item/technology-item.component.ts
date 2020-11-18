import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-technology-item[imageSrc][technologyName][usagePercent]',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss']
})
export class TechnologyItemComponent implements OnInit {

  @Input() public imageSrc: string;
  @Input() public technologyName: string;
  @Input() public usagePercent: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get technologyUsagePercent() {
    return this.usagePercent + '%';
  }
}
