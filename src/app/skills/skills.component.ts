import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js'
import { Skill } from '../skill';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardSkills: Skill[] = []

  softSkills: Skill[] = []

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    var collapsibleElems = document.querySelectorAll('.collapsible' );
    var collapsibleInstances = M.Collapsible.init(collapsibleElems, {"accordion":false});

    this.softSkills = this.skillsService.getSoftSkills();
    this.hardSkills = this.skillsService.getHardSkills();

  }
}
