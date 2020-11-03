import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  public isShowProjectInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public setProjectInfoVisibility(value: boolean): void {
    this.isShowProjectInfo = !this.isShowProjectInfo;
  }
}
