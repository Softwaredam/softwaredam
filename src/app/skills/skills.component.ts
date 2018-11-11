import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  hardSkills = [
    {"name":"Java stack engineering",
     "stars": ["star","star","star","star","star"] },
    {"name":"CI/CD",
     "stars": ["star","star","star","star","star"] },
    {"name":"DevOps",
     "stars": ["star","star","star","star_half","star_border"] },
    {"name":"Full-stack engineering",
     "stars": ["star","star","star","star","star_border"] },
    {"name":"Software test automation",
     "stars": ["star","star","star","star","star_border"] },
    {"name":"Software architecture",
     "stars": ["star","star","star","star","star_border"] },
  ]

  softSkills = [
    {"name":"Technical team leading",
     "stars": ["star","star","star","star","star"] },
    {"name":"Agility",
     "stars": ["star","star","star","star","star_half"] },
    {"name":"Motivating/Inspiring teams",
     "stars": ["star","star","star","star_half","star"] },
    {"name":"Taking ownership",
     "stars": ["star","star","star","star","star"] },
    {"name":"Communication",
     "stars": ["star","star","star","star","star"] },
    {"name":"Public speaking",
      "stars": ["star","star","star","star_half","star_border"] },
  ]

  constructor() { }

  ngOnInit() {
    var collapsibleElems = document.querySelectorAll('.collapsible' );
    var collapsibleInstances = M.Collapsible.init(collapsibleElems, {"accordion":false});
  }

}
