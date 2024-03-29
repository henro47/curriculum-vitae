import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/Animations/fadeAni';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fade]
})
export class AboutComponent implements OnInit {

  constructor() { }
  //Main card info
  about_main_info: any = {
    first_name: "Hendrik Fick Renaldo Potgieter (Henró)",
    occupation: "Graduate Software Developer at Nile.ag",
    area: "Gauteng, South Africa",
    cell: "+27 66 098 0801",
    cellHref: "tel:+27660980801",
    email: "hfrpotgieterC@gmail.com",
    emailHref: "mailto:hfrpotgieterC@gmail.com?Subject=Job%20Opportunity",
    download: "Download CV",
    downloadHref: "assets/CV.pdf"
  };


  //About Card info
  about_sub_info: any = {
    about_title: "About",
    about_subtitle: "A Little about me",
    about_body: "I am an independent, hardworking and creative individual" +
  " who is also reliable and has developed a responsible and ethical approach" +
  " to the tasks that I undertake or any given situation I am placed in." +
  " I am excellent at working and communicating in a team. I believe in integrity" + 
  " and strong moral values and that an individual should strive to be successful" + 
  " not only in their career but also in their personal life." +
  " I also believe that everything you put your energy into, you can be successful in" +
  " it if you do it with a positive mindset and with hard work."
  };

  //Career Card info
  about_career_info: any = {
    career_title: "Career",
    career_subtitle: "Goal Objective",
    career_body: "I am looking for an opportunity to grow and learn in my field of study." +
    " I understand that there is still much to learn, and I am willing and eager to learn new skills." +
    " I like to solve complex problems and I try to solve them in a creative, efficient way." +
    " When a problem grips me, I push myself to find a solution and I will not be satisfied until it is resolved." +
    " I am a hardworking, focused and disciplined individual with a big amount of willpower."+
    " I have the correct amount of computer, communication and teamwork skills to be appointed to this position."
  };
  

  //Social Card info
  about_social_info: any = {
    social_title: "Social",
    social_subtitle: "My Social Accounts",
    gitHub: "GitHub",
    linkedIn: "LinkedIn",
    gitHubHref: "https://github.com/henro47",
    linkedInHref: "https://www.linkedin.com/in/hendrikPotgieter4701",
  };

  //OffCanvas Information
  about_offcanvas_info: any = {
    offcanvas_title: "Contact Details",
    offcanvas_button: "Contact Me"
  };

  ngOnInit(): void {
  }

}
