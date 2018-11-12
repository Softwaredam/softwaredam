import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min.js'
import { SkillsService } from '../skills.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skill = {
    name: "",
    stars: ["star_border", "star_border", "star_border", "star_border", "star_border"]
  }

  previousStarIndex: number = -1;
  previousStarRating: String = '';

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  }

  addNewSkill() {
    this.skillsService.addNewSkill(this.skill);
    this.skill.name = '';
    this.skill.stars = ["star_border", "star_border", "star_border", "star_border", "star_border"];
  }


  rate(starIndex: number) {
    this.clearRating();

    var num:number = 0
    for(num=0;num<=starIndex;num++) {
      this.skill.stars[num] = "star";
    }

    if( this.previousStarIndex  === starIndex ) {

      if( this.previousStarRating === "star" ){
        this.skill.stars[starIndex] = "star_half"
        this.previousStarRating = "star_half";
      } else {
        this.skill.stars[starIndex] = "star"
        this.previousStarRating = "star";
      }

    } else {
      this.previousStarIndex = -1;
      this.previousStarRating = '';
      this.skill.stars[starIndex] = "star_half"
    }

    this.previousStarIndex = starIndex;
  }

  clearRating() {
    var num:number = 0
    for(num=0;num<5;num++) {
      this.skill.stars[num] = "star_border";
    }
  }

}
