import {Component, Input, OnInit} from '@angular/core';
import {PortfolioProject} from '../../../models/portfolio-project';

@Component({
  selector: 'pw-project-card[project]',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: PortfolioProject;

  public isShowProjectInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public setProjectInfoVisibility(value: boolean): void {
    this.isShowProjectInfo = !this.isShowProjectInfo;
  }
}
