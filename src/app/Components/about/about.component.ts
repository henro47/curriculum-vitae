import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  //Main card info
  name = "Hendrik Fick Renaldo Potgieter (Henro)" ;
  education = "BSc Hons in Computer Science and Information Systems" ;
  area = "NWU Potchefsroom Campus";
  cell = "+27 79 923 1400";
  email = "henro47@gmail.com";
  download = "Download CV";

  //About Card info
  aboutTitle = "About";
  aboutSubTitle = "A Litte about me";

  //Career Card info
  careerTitle = "Career";
  careerSubTitle = "Goal Objective" ;

  //Social Card info
  socialTile = "Social";
  socialSubTitle = "My Social Accounts";

  ngOnInit(): void {
  }

}
