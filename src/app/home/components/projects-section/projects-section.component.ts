import { Component, OnInit } from '@angular/core';
import {PortfolioProjectService} from '../../services/portfolio-project.service';

@Component({
  selector: 'pw-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  constructor(public portfolioProjectService: PortfolioProjectService) { }

  ngOnInit(): void {
  }
}
