import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  PROJECTS: Project[] = [
    {
      id: 3,
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
      key: "wlis",
      name: "WLIS",
      customer: "ProRail",
      start: "September 2017",
      end: "October 2018",
      image: "assets/images/wlis.png",
      imageCaption: "Image copyright 2018 @ ProRail.",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "WLIS is ProRail's new information system for Cargo Trains and Wagons. It is responsible for keeping the overview of the cargo train which drive or stand still on Dutch rails. This system is used by ProRail and its carrier partners.",
        "The WlIS back-end is built in Java 8 and Spring Boot. The front-end is built in ReactJS, Typescript and Material UI."
      ],
      roles: ["Technical Lead", "Scrum-master", "Solution Architect", "CI/CD specialist" ],
      activities: [
        "Customer communication", "Partnering with ProRail to choose a fit strategy", "Leading the scrum process intern/extern", "Coaching and helping the dev-team",
      ],
      tools: [
        "Java 8", "Spring boot", "REST", "JBoss", "React", "Materialize-UI", "CI/CD", "Typescript", "Jenkins", "Maven", "EMS", "..."
      ],
    },

    {
      id: 1,
      key: "sbg",
      name: "SBG++",
      customer: "ProRail",
      start: "2011",
      end: "2013",
      image: "assets/images/sbg.jpeg",
      imageCaption: "SBG++ team during a daily stand-up. Image copyright Nico Ouburg.",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers.",
        "SBG++ is a sophisticated, and yet simple intuitive desktop application."
      ],
      roles: ["Medior Java Software Engineer", "Quality analist"],
      activities: [
        "Implemting and testing user stories", "Helping with design of the UI", "Taking part in all activiteis of the scrum team"
      ],
      tools: [
        "Java SE/EE","JavaFX 1.3/2.0", "Maven", "Jenkins", "Junit", "WSDL", "XML", "SOAP", "SIG (Software Improvement Group)",
      ],
    },

    {
      id: 0,
      key: "thirdeye",
      name: "The Third Eye Robot",
      customer: "WebChair",
      start: "2010",
      end: "2011",
      image: "assets/images/3di-3.png",
      imageCaption: "The Third Eye Robot during one of the expositions. Image copyright grahamthomassmith.com",
      thumbtail: "assets/images/thirdeye_thumbtail.jpeg",
      description: [
        "The Third Eye (TTE) Robot is a remote controlled robot which makes it possible for the users to remotely visit expositions.",
        "TTE Robot concept is part of Graham Smith's art and concept.",
        "In my role as software developer I created a system which consisted of 4 applications. The user application runs on the user's machine and connects with the Robot driver app through the Skype API. The user can see through the robot's HD webcam, drive the robot and see on a map what the location of the robot is. The Robot appilcation runs on a Mac-mini on the robot and controls the motors through an arduino, the RFID reader and the camera. The arduino application is responsible for accepting and translating the user commands into the right steps on the motor. A back-end application written in PHP is responsible for inital handshake between the user and the robot and also makes sure the FIFO principle.",
      ],
      roles: [ "Java Software Developer", "Junior hardware engineer" ],
      activities: [
        "Implementing requirements",
        "Implementing the front-end designed by an expert",
        "Gathering hadware requirements",
        "Choosing hardware components and assembling them"
      ],
      tools: [
        "Java", "Swing", "Skype API", "PHP", "MySQL", "Arduino", "RFID", "Hardware", "Mac Mini",
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
