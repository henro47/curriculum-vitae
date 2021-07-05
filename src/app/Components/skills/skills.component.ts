import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/Animations/fadeAni';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations:[fade],
})
export class SkillsComponent implements OnInit {

  constructor() { }

  //Card Information
  cardTitle = "Skills" ;
  cardSubTitle = "My skills" ;

  //skills names
  web = "Web Development (HTML, CSS, JS, Node.js)" ;
  java = "Java" ;
  cSharp = "C#" ;
  cPlus = "C++" ;
  mobile = "Mobile Development" ;
  python = "Python"
  sql = "Structured Query Language" ;


  ngOnInit(): void {
  }

}
