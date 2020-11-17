import {Injectable} from '@angular/core';
import {PortfolioProject} from '../models/portfolio-project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {

  private readonly portfolioProjects: Array<PortfolioProject> = [
    {
      id: 0,
      name: 'Patternica website',
      description: 'Company website. Company website. Several pages about the company and the field of activity, a blog with useful articles about the life of the company and IT, a page with vacancies and a form for contacting the company. On this project I was engaged in layout and implementation of functionality for the following pages: "Hire developer", "Dedicated team", "Portfolio", "Blog", "Career" and also admin. panel for site management.',
      year: '2020',
      imageSrc: '/assets/img/projects/patternica_website.jpg'
    },
    {
      id: 1,
      name: 'Online restaurant',
      description: 'Application for communication in the format of a conversation, for example, in a restaurant. Several interactive backgrounds are available, implemented using a neural network, which turns the background behind the interlocutor into a selected location using only the webcam. Several background sounds are also available to give the conversation the atmosphere of the chosen location.',
      year: '2020',
      imageSrc: '/assets/img/projects/nda_project.jpg'
    },
    {
      id: 2,
      name: 'Travel portal',
      description: 'Website for travelers. There is a large amount of functionality for searching for tours by any parameters, for example: hotels, number of places and way of travel to the destination. The site also provides administrative functions for companies that post their tours (including orders, payment and customer support.). On this project, I was engaged in the development and support of existing functions of the admin panel, fixing bugs and implementing new functionality.',
      year: '2019-2020',
      imageSrc: '/assets/img/projects/nda_project.jpg'
    },
    {
      id: 3,
      name: 'Product manager',
      description: 'My own project, which later became a course work. A marketplace for people who sell consumer goods. There is flexible functionality for buyers, sellers, and administration. It is possible to manage products, easily create new categories and subcategories without interfering with the page code, manage all products, orders, track history and statuses, cart, product units for convenient sale of products of different types.',
      year: '2018-2019',
      imageSrc: '/assets/img/projects/product_manager.jpg'
    },
    {
      id: 4,
      name: 'Exams simulator',
      description: 'A project for testing knowledge of tests, supports input data in JSON or TXT format (based on the input data, tests are created with a known correct option). There is a function of mixing answer options, tests, or all together. There is also a quick test function - if the number of questions is more than 30, only 30 random ones will be selected. After completing the testing, statistics will be displayed: the number of correct answers, the score and all the incorrect answers.',
      year: '2018',
      imageSrc: '/assets/img/projects/exams_simulator.jpg'
    }
  ];

  constructor() {
  }

  public getPortfolioProjects(): Array<PortfolioProject> {
    return this.portfolioProjects;
  }
}
