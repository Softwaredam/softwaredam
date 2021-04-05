import { Component, OnInit } from '@angular/core';
import gitInfo from '../../environments/git-version.json';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  buildTimestamp = (<any>gitInfo).hash + " - " + (<any>gitInfo).dateTime;

  constructor() { }
  ngOnInit() {
  }
}
