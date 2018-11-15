import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  test =["","",""];
  
  PROJECTS = [
    {
      id: 1,
      name: "Softwaredam.com",
      customer: "Softwaredam",
      image: "france3.jpg",
      description: "Currently looking at, Softwaredam.com is my company's website. I have built it from the scratch using open source projects. The look and feel is inspired by Material Design of Google which is implemented by Materialize CSS. It is backed by Angular 7. Softwaredam.com runs on GitHub Pages and it is licensed under MIT.",
      activities: [
        ""
      ],
      tools: [
        "Angular 7", "Material Design", "Materialize CSS", "HTML", "CSS", "Atom", "GitHub", "Github Pages",
      ],
    },

    {
      id: 2,
      name: "SBG++",
      customer: "ProRail",
      image: "sbg.jpeg",
      description: "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers. SBG++ is a sophisticated, and yet simple intuitive desktop application.",
      role: "Medior Java Software Engineer",
      activities: [
        ""
      ],
      tools: [
        "Java", "Maven", "Jenkins", "Junit"
      ],
    },

    {
      id: 1,
      name: "SBG++",
      customer: "ProRail",
      image: "sbg.jpeg",
      description: "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers. SBG++ is a sophisticated, and yet simple intuitive desktop application.",
      role: "Medior Java Software Engineer",
      activities: [
        ""
      ],
      tools: [
        "Java", "Maven", "Jenkins", "Junit"
      ],
    },

    {
      id: 1,
      name: "SBG++",
      customer: "ProRail",
      image: "sbg.jpeg",
      description: "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers. SBG++ is a sophisticated, and yet simple intuitive desktop application.",
      role: "Medior Java Software Engineer",
      activities: [
        ""
      ],
      tools: [
        "Java", "Maven", "Jenkins", "Junit"
      ],
    },

  ]

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  }

}
