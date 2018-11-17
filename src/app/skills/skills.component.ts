import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js'
import { Skill } from '../model/skill';
import { SkillsService } from '../services/skills.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardSkills: Skill[] = [];
  softSkills: Skill[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    var collapsibleElems = document.querySelectorAll('.collapsible' );
    var collapsibleInstances = M.Collapsible.init(collapsibleElems, {"accordion":false});

    this.skillsService.getSoftSkills().subscribe(softSkills => this.softSkills = softSkills);
    this.skillsService.getHardSkills().subscribe(hardSkills => this.hardSkills = hardSkills);
  }
}
