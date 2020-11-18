import { Component, OnInit } from '@angular/core';
import {PortfolioProjectService} from '../../services/portfolio-project.service';

@Component({
  selector: 'pw-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss']
})
export class SectionPortfolioComponent implements OnInit {

  constructor(public portfolioProjectService: PortfolioProjectService) { }

  ngOnInit(): void {
  }

}
