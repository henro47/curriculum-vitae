import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  

  constructor() { }

  changeImage(buttonId: string)
  {
     if(buttonId == 'GD')
     {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "BSc IT Degree";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/GoldenKey.png";
     }

     if(buttonId == "PG")
     {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Bsc Hons in CS and IT Degree";
       var coverImg = <HTMLInputElement>document.getElementById('img');
       coverImg.src = "assets/GoldenKey.png";
     }

     if(buttonId == "M")
     {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Matriculated 2017";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/GoldenKey.png";
     }

    if(buttonId == "GK")
    {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Golden key Certificate";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/GoldenKey.png";
    }
  }

  tertiaryTitle = "Tertiary Education" ;
  tertiarySubTitle = "North-West University Potchefstroom Campus" ;

  secondaryTitle = "Secondary Education" ;

  achievementsTitle = "Additional Academic Achievements" ;

  //Degree OffCanvas
  OffCanvasDegTitle = "Bachelor of Science in Information Technology" ;

  ngOnInit(): void {
  }

}
