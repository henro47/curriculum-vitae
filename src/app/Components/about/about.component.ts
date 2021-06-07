import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  name = "Hendrik Fick Renaldo Potgieter (Henro)" ;
  education = "BSc Hons in Computer Science and Information Systems" ;

  ngOnInit(): void {
  }

}
