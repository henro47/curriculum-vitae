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
  cellHref = "tel:+27799231400";
  email = "henro47@gmail.com";
  emailHref = "mailto:henro47@gmail.com?Subject=Job%20Opportunity";
  download = "Download CV";
  downloadHref ="#"

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
