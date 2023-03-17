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
    year_2021: '2021',
    year_2023: '2023'
  };

  Content_2023: any = {
    contents : [
      {
        title: 'Graduate Software Developer @Nile.ag',
        content: 'Started a position as a Golang developer at Nile.ag'
      }
    ]
  };

  Content_2022: any = {
    contents: [
      {
        title: 'Solution Developer @Linxas',
        content: 'Started a full-time position as a solution developer at Linxas where I '
          + 'have gained experience with a variety of different programming languages and frameworks. '
          + 'These programming languages and frameworks include Java, JavaScript, TypeScript, Ionic Angular, Angular, '
          + 'GuiXT, and C#. A highlight of my position to date is a Fullstack Web Application written in Ionic Angular which '
          + 'one of our clients use to pull global reports for their business. This solution consists of an Ionic Angular '
          + 'front-end web application and an accompanying Node.js Express REST API that pulls information from a MySQL database '
          + 'that is hosted on a cloud server.'
        
      },
      {
        title: 'Subcontracted Sofware Developer @Pick n Pay',
        content: 'Started a position at Pick n Pay as a JavaScript developer as well as a Neptune-Software developer. '
        + 'I play a critical role in developing AJAX calls that pull information directly from SAP functions. '
        + 'I also develop native JavaScript functions that interface with various SAP functions and native libraries.'
      }
    ]
  };

  Content_2021: any = {
    contents: [
      {
        title: 'Neptune NCP Chlorchem South Africa project',
        content: 'Played an important role in developing a software solution, using Neptune Software, to '
        + 'support business processes crucial to NCP. This was achieved by integrating various SAP '
        + 'functions through different API calls as well as important cross-platform technologies such as '
        + 'Cordova. Physical devices were also integrated by making use of independent, custom-built, '
        + 'server scripts, built in Neptune, to interface with the different devices.'
      }
    ]
  };



  ngOnInit(): void {
  }

}
