import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(){
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  browseProject(project: Project){
    this.projectService.browseProject(project);
  }
}
