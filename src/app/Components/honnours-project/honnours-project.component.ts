import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honnours-project',
  templateUrl: './honnours-project.component.html',
  styleUrls: ['./honnours-project.component.scss']
})
export class HonnoursProjectComponent implements OnInit {

  cardTitle = "Automated terrain classification using vibrations and a feed-forward neural network." ;
  cardContent = "Abstract" ;
  cardSubContent = "Automated terrain classification can be described as the ability to identify different " + 
  "terrains based on feedback from the environment on a specific object using a technique such as deep learning. " +
  "Automated terrain classification using vibration readings has a number of practical applications for society. " +
  "One of these applications is autonomous self-driving vehicles. With the growing popularity of these vehicles, " +
  "the ability to classify the terrain the vehicle is currently traversing hold several key benefits for these vehicles. " +
  "The primary benefit being the fact that these vehicles could traverse various terrains more effectively by adjusting torque " +
  "settings to accommodate each terrain. Automated terrain classification can be achieved in a number of ways. " + 
  "This study intends to classify terrains using a feed-forward neural network model built in the Keras Application " + 
  "Programming Interface (API) using vibration readings. This study found that a feed-forward neural network can be constructed in " + 
  "the Keras API to accurately classify six different terrains namely bricks, dirt, epoxy, grass, stone and tarmac using vibration readings." ;
  cardKeyWords = " Keywords: Autonomous vehicles, deep learning, feed-forward neural networks, Keras API, terrain classification, vibrations" ;
  
  download = "View Full Research Report" ;
  downloadHref = "assets/honnours_project.pdf" ;
  constructor() { }

  ngOnInit(): void {
  }

}
