import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/Animations/fadeAni';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  animations: [fade]
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  //work-accordion
  workTitle = "Work Experience" ;

  nwuCardTitle = "Assistant" ;
  nwuCardSub = "@ North-West University Potchefstroom Campus" ;
  nwuCardBodyPy = "Company: North-West University, Potchefstroom Campus, North West, South Africa." +
  " Date: February 2019 - June 2019. – Assisting and marking first year’s Python programming practical assignments and tests." ;

  nwuCardBodyCSharp = "Company: North-West University, Potchefstroom Campus, North West, South Africa."+
  " Date: Started February 2021 - June 2021. – Assisting and marking second year’s C# programming practical assignments and tests." ;

  nwuCardBodyAI = "Company: North-West University, Potchefstroom Campus, North West, South Africa." +
  " Date: Started February 2021 - June 2021. – Assisting and marking final year’s Artifical Intelligence" +
  " (AI) practical assignments and tests."

  movCardTitle = "Internship" ;
  movCardSub = "@Movation (Pty) Ltd." ;
  movCardBody = "Company: Movation (Pty) Ltd., E.P Malan Street, Pomona AH, " +
  "Kempton Park, Gauteng, South Africa. Date: Started 18 June 2019 – 21 June 2019." +
  " – Practical work week to gain experience in the workplace." ;

  linxCardTitle = "Part-time Developer" ;
  linxCardSub = "@Linx/AS" ;
  linxCardBody = "Company: Linx/AS, Unit 3, Verona Office Park Cnr Malibongwe" +
  "&, MacArthur Ave, Robindale, Randburg, 2194. Date started 18 November 2019 – 14 August 2020. " +
  " – Developed a mobile front-end and accompanying back-end." ;

  //References-Accordion
  refTitle = "References" ;

  refCardsTitle = "Employer" ;
  
  refCardDirk = "Dr. Dirk Snyman" ;
  refCardDirkBody = "Dr Dirk Snyman; North-West University; Potchefstroom. 082 367 3778" ;

  refCardKen = "Mr Kenneth Jackson" ;
  refCardKenBody = "Mr Kenneth Jackson; Movation (Pty) Ltd.; Kempton Park. ken.jackson@movation.co.za" ;

  refCardWer = "Mr Werner Simpson" ;
  refCardWerBody = "Mr. Werner Simpson; Linx/AS Randburg; 083 495 3955"; 

  refCardZan = "Mr Zander Boonzaaeir" ;
  refCardZanBody = "Mr Zander Boonzaaeir; North-West University; Potchefstroom. 076 627 9479" ;

  ngOnInit(): void {
  }

}
