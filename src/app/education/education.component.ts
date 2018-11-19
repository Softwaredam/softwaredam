import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  EDUCATION = [
    {
      study: "Software Engineering",
      title: "Master of Science",
      initials: "MSc.",
      instituion: "University of Amsterdam",
      inistituionShort: "UvA",
      from: "2012",
      to: "2014",
      type: "1 day part-time",
    },

    {
      study: "Technical Informatics",
      title: "Bachelors",
      initials: "Ing.",
      instituion: "University of Applied Sciences of Rotterdam",
      inistituionShort: "HR",
      from: "2007",
      to: "2011",
      type: "full-time",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
