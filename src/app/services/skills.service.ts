import { Injectable } from '@angular/core';
import { Skill } from '../model/skill'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  HARD: Skill[] = [
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
  ];

  SOFT: Skill[] = [
    {"name":"Technical team leading",
     "stars": ["star","star","star","star","star"] },
    {"name":"Agility",
     "stars": ["star","star","star","star","star_half"] },
    {"name":"Motivating/Inspiring teams",
     "stars": ["star","star","star","star","star"] },
    {"name":"Taking ownership",
     "stars": ["star","star","star","star","star"] },
    {"name":"Communication",
     "stars": ["star","star","star","star","star"] },
    {"name":"Public speaking",
      "stars": ["star","star","star","star_half","star_border"] },
  ];

  constructor() { }

  getSoftSkills(): Observable<Skill[]> {
    return of(this.SOFT);
  }

  getHardSkills(): Observable<Skill[]> {
    return of(this.HARD);
  }

  addNewSkill(newSkill: Skill) {
    this.HARD.push({name: newSkill.name, stars: newSkill.stars});
  }
}
