import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;

  constructor(private activatedRoute:ActivatedRoute, private projectService: ProjectService, private location: Location) { }

  ngOnInit() {
    let projectKey = this.activatedRoute.snapshot.paramMap.get('projectKey');
    this.project = this.projectService.getProject(projectKey);
  }

  goBack() {
    this.location.back();
  }

}
