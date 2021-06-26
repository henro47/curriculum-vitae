import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  tertiaryTitle = "Tertiary Education" ;
  tertiarySubTitle = "North-West University Potchefstroom Campus" ;

  secondaryTitle = "Secondary Education" ;

  achievementsTitle = "Additional Academic Achievements" ;

  ngOnInit(): void {
  }

}
