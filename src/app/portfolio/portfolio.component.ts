import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  PROJECTS = [
    {
      id: 1,
      name: "Website",
      customer: "Softwaredam.com",
      start: "November 2018",
      end: "present",
      image: "_MG_0062.jpg",
      imageCaption: "",
      thumbtail: "profile_pic.jpg",
      description: "Currently looking at, Softwaredam.com is my company's website. I have built it from scratch using open source projects. The look and feel is inspired by Material Design of Google which is implemented by Materialize CSS. It is backed by Angular 7. Softwaredam.com runs on GitHub Pages and it is licensed under MIT.",
      roles: ["Front-end engineer","PO",],
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
      start: "2011",
      end: "2013",
      image: "sbg.jpeg",
      imageCaption: "SBG++ team during a daily stand-up. Image copyright Nico Ouburg.",
      thumbtail: "sbg_thumbtail.png",
      description: "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers. SBG++ is a sophisticated, and yet simple intuitive desktop application.",
      roles: ["Medior Java Software Engineer",],
      activities: [
        ""
      ],
      tools: [
        "Java SE/EE","JavaFX 1.3/2.0", "Maven", "Jenkins", "Junit"
      ],
    },

  ]

  constructor() { }

  ngOnInit(){
  }

}
