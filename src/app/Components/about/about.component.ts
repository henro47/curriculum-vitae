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
  aboutSubTitle = "A Little about me";
  aboutBody = "I am an independent, hardworking and creative individual " + 
  "who is also reliable and has developed a responsible and ethical approach " +
  "to the tasks that I undertake or any given situation I am placed in. " +
  "I am excellent with working and communicating in a team. I believe in integrity " +
  "and strong moral values and that an individual should strive to be successful not " +
  "only in their career but also in their personal life. " +
  "I also believe that everything you tackle you can be successful in " +
  "if you do it with a positive manner and with hard work.";

  //Career Card info
  careerTitle = "Career";
  careerSubTitle = "Goal Objective" ;
  careerBody = "I am looking for an opportunity to grow and learn in my field of study. " + 
  "I understand that there is still much to learn, and I am willing and eager to learn new things. "+
  "I like to solve complex problems and I try to solve them in a creative, unconventional way. " +
  "When a problem grips me, I push myself to find a solution and I will not be satisfied until it is resolved. " +
  "I am a hardworking, focused and disciplined individual with a big amount of will power. " +
  "I have the correct amount of computer, communication and teamwork skills to be appointed this position." ;

  //Social Card info
  socialTile = "Social";
  socialSubTitle = "My Social Accounts";
  gitHub = "GitHub";
  linkedIn = "LinkedIn";

  gitHubHref = "https://github.com/henro47";
  linkedInHref = "https://www.linkedin.com/in/hendrikPotgieter4701";

  //OffCanvas Information
  offCanvasTitle = "Contact Details" ;
  offConvasButton = "Contact Me";
  ngOnInit(): void {
  }

}
