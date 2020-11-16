import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pw-project-card[projectName][projectDescription][imageSrc][projectYear]',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() projectName: string;
  @Input() projectDescription: string;
  @Input() projectYear: string;

  public isShowProjectInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public setProjectInfoVisibility(value: boolean): void {
    this.isShowProjectInfo = !this.isShowProjectInfo;
  }
}
