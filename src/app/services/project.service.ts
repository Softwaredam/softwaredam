import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  PROJECTS: Project[] = [
    {
      id: 1,
      key: "softwaredam",
      name: "Softwaredam.com",
      customer: "Softwaredam",
      start: "November 2018",
      end: "present",
      image: "assets/images/stonesbackground.jpg",
      imageCaption: "",
      thumbtail: "assets/images/profile_pic.jpg",
      description: [
        "Currently looking at, Softwaredam.com is my company's website. It is built from scratch using Angular 7 and Materialize CSS open source projects.",
        "The look and feel is inspired by Material Design of Google which is implemented by Materialize CSS. It is backed by Angular 7.",
        "Softwaredam.com is designed and implemented as responsive and mobile/desktop friendly as possible.",
        "It runs on GitHub Pages and it is licensed under MIT."
      ],
      roles: ["Front-end engineer","PO",],
      activities: [
        "Thinking of functionality as PO", "UX/UI Design", "Website development", "Portfolio development", "Exploring and learning Angular 7 and Materialize"
      ],
      tools: [
        "Angular 7", "Material Design", "Materialize CSS", "HTML", "CSS", "Atom", "GitHub", "Github Pages",
      ],
    },

    {
      id: 2,
      key: "sbg",
      name: "SBG++",
      customer: "ProRail",
      start: "2011",
      end: "2013",
      image: "assets/images/sbg.jpeg",
      imageCaption: "SBG++ team during a daily stand-up. Image copyright Nico Ouburg.",
      thumbtail: "assets/images/sbg_thumbtail.png",
      description: [
        "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers.",
        "SBG++ is a sophisticated, and yet simple intuitive desktop application."
      ],
      roles: ["Mainly medior Java Software Engineer", "Quality analist"],
      activities: [
        "Implemting and testing user stories", "Helping with design of the UI", "Taking part in all activiteis of the scrum team"
      ],
      tools: [
        "Java SE/EE","JavaFX 1.3/2.0", "Maven", "Jenkins", "Junit", "WSDL", "XML", "SOAP", "SIG (Software Improvement Group)",
      ],
    },

  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.PROJECTS);
  }

  getProject(key: String): Project {
    return this.PROJECTS.find(p => p.key === key);
  }
}
