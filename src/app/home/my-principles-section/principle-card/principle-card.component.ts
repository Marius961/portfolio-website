import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-principle-card[imageSrc][cardTitle]',
  templateUrl: './principle-card.component.html',
  styleUrls: ['./principle-card.component.scss']
})
export class PrincipleCardComponent implements OnInit {

  @Input() public imageSrc: string;
  @Input() public cardTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
