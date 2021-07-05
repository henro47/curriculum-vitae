import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/Animations/fadeAni';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [fade]
})
export class EducationComponent implements OnInit {
  

  constructor() { }

  changeImage(buttonId: string)
  {
     if(buttonId == 'GD')
     {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "BSc IT Degree";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/Grad.jpg";
     }

     if(buttonId == "PG")
     {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Bsc Hons in CS and IT Degree";
       var coverImg = <HTMLInputElement>document.getElementById('img');
       coverImg.src = "assets/Template.jpg";
     }

     if(buttonId == "M")
     {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Matriculated 2017";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/Matric.jpg";
     }

    if(buttonId == "GK")
    {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Golden key Certificate";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/GoldenKey.png";
    }

    if(buttonId == 'A')
    {
      (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = "Academic Top 10 Award";
      var coverImg = <HTMLInputElement>document.getElementById('img');
      coverImg.src = "assets/TopTen.jpg";
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
