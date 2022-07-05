import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/Animations/fadeAni';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  animations: [fade]
})
export class HighlightsComponent implements OnInit {

  constructor() { }

  pageTitle = "Career Highlights";
  pageSubtitle = "A brief history of the highlights of my career";

  Dates: any = {
    near_future: 'NEAR FUTURE',
    year_2022: '2022',
    year_2021: '2021'
  };

  Content_2022: any = {
    title: 'Solution Developer @Linxas',
    content: 'Started a full-time position as a solution developer at Linxas ' 
    + ' where I have gained experience with a variety of different programming languages '
    + ' and frameworks.'
  }

  Content_2021: any = {
    title: 'Neptune NCP Chlorchem South Africa project',
    content: 'Played an important role in developing a software solution, using Neptune Software, to '
    + 'support business processes crucial to NCP. This was achieved by integrating various SAP '
    + 'functions through different API calls as well as important cross-platform technologies such as '
    + 'Cordova. Physical devices were also integrated by making use of independent, custom-built, '
    + 'server scripts, built in Neptune, to interface with the different devices.'
  };



  ngOnInit(): void {
  }

}
