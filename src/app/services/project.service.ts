import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Project } from "../model/project";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  PROJECTS: Project[] = [
    {
      id: 92,
      key: "dso",
      name: "Digitaal Stelsel Omgevingswet",
      customer: "RWS",
      start: "11/2019",
      end: "present",
      image: "assets/images/omgeving_back.jpg",
      imageCaption: "",
      thumbtail: "assets/images/logo_omgevingsloket_circle.png",
      description: [
        "As a member of the exploitation team, I overlook the architecture, delivery and quality process. Together with management we set goals, plan them and execute them within SAFe and Scrum.",
        "I help 6 teams, and around 80+ software components to increase quality and build scalable cloud-native applications. The journey so far has involved migrating from Docker Swarm to Kubernetes and Openshift, from Bitbucket+Jenkins to GitLab, architectural refactorings and a lot of modernization.",
      ],
      roles: ["Technical Lead", "Migration and Integration Architect"],
      activities: [
        "Advising, planning and execution of complex zero downtime migrations",
        "Advising and planning of complex system refactorings",
        "Requirements Engineering",
        "Hands-on development and testing to help teams",
        "DevOps",
        "Presenting workshops and hands-on sessions",
      ],
      tools: [
        "SAFe",
        "Scrum / Agile",
        "Kubernetes",
        "Openshift",
        "Docker (swarm)",
        "Harbor",
        "Jenkins",
        "Java/JDK",
        "Java 8",
        "Java 11",
        "Java 14",
        "Java 17",
        "Spring",
        "Micronaut",
        "Maven",
        "GitLab",
        "PostgreSQL",
        "Nginx",
        "Apache",
        "Traefik",
        "Helm",
        "Kustomize",
        "Ansible",
        "WSO2AM",
        "WSO2IS",
        "Postfix",
        "...",
      ],
    },
    {
      id: 57,
      key: "bvb",
      name: "Berichten voor Bedrijven",
      customer: "RVO",
      start: "04/2019",
      end: "04/2020",
      image: "assets/images/criss-cross.jpg",
      imageCaption: "",
      thumbtail: "assets/images/rijksoverheid_logo.png",
      description: [
        "BvB (Berichten voor Bedrijven) is an API platform which enables RVO (Rijksdienst voor Ondernemend Nederland) to offer its digital services in a modern and secure way. It implements WSO2 API management in combination with 2-way TLS on the front to serve the customers. The API's are offered as REST/Json.",
        "At its backend, it has has implemented a set of microservices in Java which protects and offers legacy system functionalities such as Berichten voor Bedrijven and KvK's HR-data.",
        "BvB has implemented its services in a non-blocking fashion, by accepting orders (opdrchten) which are processed at the background, that are then collected at a later time.",
        "BvB is implemented with NoOps and DevOps concepts in mind. It is fully automated. Features are automatically tested and promoted to different environments like acceptance, pre-production and production. Everything, including configuration, secrets, certificates, keys and so on are handled securely as code.",
        "BvB resides on the Standard Platform of the Dutch government (Ministerie van Infrastructuur en Waterstaat). It offers a modern platform for developing and hosting of applications. Some of the main blocks are Kubernetes (Openshift), Docker, GitLab, Harbor, and more.",
      ],
      roles: ["Solution Architect", "Technical Lead"],
      activities: [
        "DevOps",
        "Agile solution shaping to support DevOps, CI/CD and Continuous Quality",
        "Development and testing",
        "Requirements Engineering",
        "Backlog management",
        "Team management",
      ],
      tools: [
        "Microservice",
        "Kubernetes",
        "Docker",
        "GitLab",
        "Harbor",
        "WSO2AM",
        "PostgreSQL",
        "Java",
        "Java 8",
        "Java 11",
        "Spring",
        "Micronaut",
        "Gradle",
        "REST",
        "SOAP",
        "XML",
        "Json",
        "Security",
        "PKI PKIoverheid",
      ],
    },

    {
      id: 3,
      key: "movo",
      name: "MijnOverheid voor Ondernemers",
      customer: "KvK",
      start: "11/2018",
      end: "04/2019",
      image: "assets/images/criss-cross.jpg",
      imageCaption: "",
      thumbtail: "assets/images/rijksoverheid_logo.png",
      description: [
        "MijnOverheid voor Ondernemers (MOvO) is een systeem dat allerlei fuctionaliteiten voor de ondernemers biedt dit met overheid zaken doen. ",
        "MOvO biedt bijvoorbeeld de mogelijkheid om via een assistent de berichten van de ondernemer die in zijn BerichtenBox voor Bedrijven opgeslagen is te laten zien.",
        "Daarnaast maakt MOvO de KvK HR-data toegankelijk voor de ondernemers.",
        "Als senior software engineer hielp ik MOvO Java microservices die met legacy systemen aan de achterkant communiceren, te realiseren, testen en op productie brengen.",
        "Dit deden we met een scrum/agile aanpak gecombineerd met DevOps.",
      ],
      roles: ["Senior DevOps Software Engineer"],
      activities: [
        "DevOps",
        "CI/CD",
        "Developing, QA and taking of functionality to production, mainly in the backend",
        "Integration of microservices",
      ],
      tools: [
        "Kubernetes",
        "Docker",
        "Harbor",
        "Azure",
        "Microservice architecture",
        "Java",
        "Java8",
        "Gradle",
        "REST",
        "SOAP",
        "XML",
        "Json",
        "Security",
        "PKI PKIoverheid",
        "Oauth2 openid connect",
        "JWT",
        "GitLab",
      ],
    },

    {
      id: 56,
      key: "softwaredam",
      name: "Portfolio App",
      customer: "Softwaredam",
      start: "11/2018",
      end: "present",
      image: "assets/images/tools1.jpg",
      imageCaption: "",
      thumbtail: "assets/images/profile_pic.jpg",
      description: [
        "Currently looking at, Softwaredam.com is my company's website. It is built from scratch using Angular 7 and Materialize CSS open source projects.",
        "The look and feel is inspired by Material Design of Google which is implemented by Materialize CSS. It is backed by Angular 7.",
        "Softwaredam.com is designed and implemented as responsive and mobile/desktop friendly as possible.",
        "It runs on GitHub Pages and it is licensed under MIT.",
      ],
      roles: ["Front-end engineer", "PO"],
      activities: [
        "Thinking of functionality as PO",
        "UX/UI Design",
        "Website development",
        "Portfolio development",
        "Exploring and learning Angular 7 and Materialize",
      ],
      tools: [
        "Angular 7",
        "Material Design",
        "Materialize CSS",
        "HTML",
        "CSS",
        "Atom",
        "GitHub",
        "Github Pages",
      ],
    },

    {
      id: 2,
      key: "wlis",
      name: "WLIS",
      customer: "ProRail",
      start: "09/2017",
      end: "10/2018",
      image: "assets/images/traincars.jpg",
      imageCaption: "Image copyright 2018 @ ProRail.",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "WLIS is ProRail's new information system for Cargo Trains and Wagons. It is responsible for keeping the overview of the cargo train which drive or stand still on Dutch rails. This system is used by ProRail and its carrier partners.",
        "The WlIS back-end is built in Java 8 and Spring Boot. The front-end is built in ReactJS, Typescript and Material UI.",
      ],
      roles: [
        "Technical Lead",
        "Scrum-master",
        "Solution Architect",
        "CI/CD specialist",
      ],
      activities: [
        "Customer communication",
        "Development and testing",
        "Partnering with ProRail to choose a fit strategy",
        "Leading the scrum process intern/extern",
        "Coaching and helping the dev-team",
      ],
      tools: [
        "Java 8",
        "Spring boot",
        "REST",
        "JBoss",
        "React",
        "Materialize-UI",
        "CI/CD",
        "Typescript",
        "Jenkins",
        "Maven",
        "EMS",
        "...",
      ],
    },

    {
      id: 1,
      key: "sbg",
      name: "SBG++",
      customer: "ProRail",
      start: "12/2011",
      end: "9/2014",
      image: "assets/images/sbg.jpeg",
      imageCaption:
        "SBG++ team during a daily stand-up. Image copyright Nico Ouburg.",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "SBG++ is a mission-critical application which shows the overview of trains and rails occupation. It is used by the Dutch train dispatchers. SBG++ is a sophisticated, and yet simple intuitive desktop application.",
        "As software engineer I was mainly responsible for implementing new features and testing them. At the same time I was part of a multidisciplinary Scrum team where I took part in different sessions, did peer reviews, and made sure the sprints and releases were delivered on time.",
        "During the last few months of the project I also gave lesson on the usage of SBG++ for train dispatcher. Upon request of the customer I was assigned to do quality analysis and help take SBG++ in production in the highly mission critical environment of the train dispatchers.",
      ],
      roles: ["Medior Java Software Engineer", "Quality analist"],
      activities: [
        "Implementation and testing of user stories",
        "Helping with design of the UI",
        "Taking part in all activiteis of the scrum team",
      ],
      tools: [
        "Java SE/EE",
        "JavaFX 1.3/2.0",
        "Maven",
        "Jenkins",
        "Junit",
        "WSDL",
        "XML",
        "SOAP",
        "SIG (Software Improvement Group)",
      ],
    },

    {
      id: 7,
      key: "ritc",
      name: "RITC",
      customer: "ProRail",
      start: "05/2017",
      end: "12/2017",
      image: "assets/images/rails.jpg",
      imageCaption: "",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "RITC is a message driven java backend component which gathers and distributes rails components information.",
        "As Technical Lead and Solution Architect I helped the team startup the project and reuse software modules from previous ProRail software.",
      ],
      roles: [
        "Technical Lead",
        "Solution Architect",
        "Senior Software Engineer",
      ],
      activities: [
        "Customer communication",
        "Architectural decisions",
        "Changes evaluation",
        "Coaching the team",
        "Development and testing",
        "Backlog maintenance",
      ],
      tools: [
        "Java EE",
        "JMS",
        "WebLogic 12c",
        "Singleton-service",
        "XSD",
        "Jaxb",
        "Red Hat",
        "RHEL 6",
        "CentOS",
        "RPM",
        "Maven",
        "Jenkins",
        "Pipelines",
        "GitLab",
        "Slack",
      ],
    },

    {
      id: 35,
      key: "isvl",
      name: "ISVL",
      customer: "ProRail",
      start: "11/2015",
      end: "06/2017",
      image: "assets/images/website.jpg",
      imageCaption: "",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "ISVL is a web application which is used by train dispatcher, traffic controllers and other parties in and around ProRail for communication of last minute orders. ",
        "As a technical lead I was responsible for both the technical aspects and process aspects of the development team. I evaluated the proposals and changes, analyzed and solved major performance problems, coached the team, and took part in writing features.",
      ],
      roles: [
        "Technical Lead",
        "Solution Architect",
        "Senior Software Engineer",
      ],
      activities: [
        "Customer communication",
        "Architectural decisions",
        "Solve major performance issues",
        "Changes evaluation",
        "Coaching the team",
        "Development and testing",
        "Backlog maintenance",
      ],
      tools: [
        "Java 6/8",
        "WebLogic",
        "11c",
        "12g",
        "Spring",
        "Hibernate",
        "Vaadin 7",
        "Icepush",
        "Jaxb",
        "JMS",
        "Sprintboot",
        "REST",
        "Team stabalization",
        "Automatic regression tests",
        "load test",
        "Vaadin Testbench",
        "PhantomJS",
        "WSDL",
        "SOAP",
        "XML",
        "Maven",
        "Jenkins",
        "Nexus",
        "Sonar",
        "CQA",
      ],
    },

    {
      id: 35,
      key: "tpsmcs",
      name: "TPS/MCS",
      customer: "ProRail",
      start: "09/2014",
      end: "06/2015",
      image: "assets/images/treinspoor.jpg",
      imageCaption: "",
      thumbtail: "assets/images/prorail_logo.png",
      description: [
        "Train Position System Train is a highly available system which gathers and distributes train positions.",
        "As a senior software engineer I was part of a multidisciplinary scrum team who implemented and tested features. Later on I was also responsible for leading the dev-team. Together with the team I was responsible for a high 5-star SIG (min. 4-star) quality system.",
      ],
      roles: ["Senior Software Engineer"],
      activities: [
        "Development and testing",
        "Take part in a multidisciplinary scrum team",
        "Customer communication",
        "Quality analysis",
        "Later on: lead the team and arthitecture",
      ],
      tools: [
        "Java EE 5",
        "JavaFX 2.0",
        "WebLogic 11g",
        "Singleton-Service",
        "WLST",
        "RHEL6",
        "XSD",
        "XML",
        "RPM",
        "Bash",
        "Batch",
        "python",
        "Maven",
        "Jenkins",
        "Phabricator",
        "RPM",
      ],
    },

    {
      id: 25,
      key: "devatcgi",
      name: "Dev@CGI",
      customer: "CGI",
      start: "05/2018",
      end: "10/2018",
      image: "assets/images/devcgi.png",
      imageCaption:
        "Dr. Felienne Hermans during the opening of Dev@CGI community.",
      thumbtail: "assets/images/cgi_logo.png",
      description: [
        "Dev@CGI is a community for developers in CGI NL. As part of the core team and later on head of the Dev@CGI community I organized workshops and external speakers sessions for the developers. I also formed an interface to the management.",
      ],
      roles: ["Dev visionary"],
      activities: [
        "Communication",
        "Organize community meetings and workshops",
        "Invite external speakers",
        "Give key notes and presentations",
      ],
      tools: [""],
    },

    {
      id: 5,
      key: "cgi-cicd",
      name: "CI/CD Envs",
      customer: "CGI",
      start: "06/2014",
      end: "10/2018",
      image: "assets/images/cogwheels.jpg",
      imageCaption: "",
      thumbtail: "assets/images/cgi_logo.png",
      description: [
        "As a CI/CD specialst I have mostly taken the responsibility to set up an integrated development and test environment and focus on new tools and concepts. During this period I also helped multiple projects to adapt new tools and successfully migrate from old environments. ",
      ],
      roles: ["CI/CD Specialist"],
      activities: [
        "Set up and integrate new tools",
        "Coach teams adapt the new tools",
        "Migrate to new concepts and tools.",
      ],
      tools: [
        "Slack",
        "GitLab",
        "GitLab",
        "BitBucket",
        "SVN",
        "Jira",
        "Trac",
        "Jenkins",
        "Jenkins Pipelines",
        "Cruicible",
        "Nexus",
        "Sonar",
        "Maven",
        "Docker",
        "RHEL",
        "CentOS",
        "Bash",
        "Batch",
        "Windows Server",
        "JBoss",
        "WebLogic",
        "FishEys",
        "Cruicible",
      ],
    },

    {
      id: 4,
      key: "mediations",
      name: "Mediations Factory",
      customer: "NS",
      start: "06/2015",
      end: "11/2015",
      image: "assets/images/puzzle.jpg",
      imageCaption: "",
      thumbtail: "assets/images/ns_logo.png",
      description: [
        "As a middlware software engineer I and 2 other colleagues built a mediations factory which produced mediations/adapters for integrating applications on Websphere ESB server.",
      ],
      roles: ["Senior Software Engineer"],
      activities: ["Set up a new Dev & Test stack"],
      tools: [
        "Java EE",
        "JMS",
        "SOAP",
        "XSD",
        "WSDL",
        "Red Hat (RHEL 6)",
        "CentOS",
        "Websphere ESB Server",
        "Websphere Intergration Designer",
        "Maven",
        "Jenkins",
      ],
    },

    {
      id: 14,
      key: "bruggen",
      name: "TCS Bruggen",
      customer: "PZH",
      start: "06/2011",
      end: "08/2011",
      image: "assets/images/goldengate.jpg",
      imageCaption: "",
      thumbtail: "assets/images/pzh_logo.jpg",
      description: [
        "TCS Bruggen is the Transport Control System which is used by coordinators and dispatchers to remotely open and close the bridges of the South-Holland province.",
        "As a software engineer I was responsible for implementing new changes, fixing bugs, writing unit tests and making releases.",
      ],
      roles: ["Java Software Engineer"],
      activities: ["Implementing changes", "fixing bugs."],
      tools: [
        "Java SE 5/6",
        "Swing",
        "Ibator/Ibatis",
        "MySQL",
        "Ant",
        "IBM Synergy",
        "Design Patterns",
      ],
    },

    {
      id: 11,
      key: "blat",
      name: "BLAT",
      customer: "RWS",
      start: "09/2011",
      end: "12/2011",
      image: "assets/images/maeslantkering.jpg",
      imageCaption: "",
      thumbtail: "assets/images/rws_logo.png",
      description: [
        "BLAT is an analysis and reporting tool for BOS, the system behind Maeslantkering storm surge barrier. BLAT is written in Java.",
        "As a software engineer I was responsible for implementing new changes, fixing bugs, writing unit tests and making releases.",
      ],
      roles: ["Junior Java Software Engineer"],
      activities: ["Implementing changes", "fixing bugs."],
      tools: [
        "Java SE 5/6",
        "Swing",
        "Ibator/Ibatis",
        "MySQL",
        "Ant",
        "IBM Synergy",
      ],
    },

    {
      id: 0,
      key: "thirdeye",
      name: "The Third Eye Robot",
      customer: "WebChair",
      start: "02/2010",
      end: "01/2011",
      image: "assets/images/3di-3.png",
      imageCaption:
        "The Third Eye Robot during one of the expositions. Image copyright grahamthomassmith.com",
      thumbtail: "assets/images/thirdeye_thumbtail.jpeg",
      description: [
        "The Third Eye (TTE) Robot is a remote controlled robot which makes it possible for the users to remotely visit expositions.",
        "TTE Robot concept is part of Graham Smith's art and concept.",
        "In my role as software developer I created a system which consisted of 4 applications. The user application runs on the user's machine and connects with the Robot driver app through the Skype API. The user can see through the robot's HD webcam, drive the robot and see on a map what the location of the robot is. The Robot appilcation runs on a Mac-mini on the robot and controls the motors through an arduino, the RFID reader and the camera. The arduino application is responsible for accepting and translating the user commands into the right steps on the motor. A back-end application written in PHP is responsible for inital handshake between the user and the robot and also makes sure the FIFO principle.",
      ],
      roles: ["Java Software Developer", "Junior hardware engineer"],
      activities: [
        "Implementing requirements",
        "Implementing the front-end designed by an expert",
        "Gathering hardware requirements",
        "Choosing hardware components and assembling them",
      ],
      tools: [
        "Java",
        "Swing",
        "Skype API",
        "PHP",
        "MySQL",
        "Arduino",
        "RFID",
        "Hardware",
        "Mac Mini",
      ],
    },
  ];

  constructor(private router: Router) {}

  getProjects(): Observable<Project[]> {
    return of(
      this.PROJECTS.sort((a, b) => {
        let as: string[] = a.start.split("/");
        let bs: string[] = b.start.split("/");
        return bs[1].localeCompare(as[1]) || bs[0].localeCompare(as[0]);
      })
    );
  }

  getProject(key: String): Project {
    return this.PROJECTS.find((p) => p.key === key);
  }

  getNumberOfProjects(): number {
    return this.PROJECTS.length;
  }

  browseProject(project: Project) {
    this.router.navigate(["/projects", project.key]);
  }
}
