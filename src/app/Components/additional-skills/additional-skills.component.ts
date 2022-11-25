import { Component, OnInit } from '@angular/core';
import { CodeWarsApiService } from 'src/app/Services/code-wars-api.service';

@Component({
  selector: 'app-additional-skills',
  templateUrl: './additional-skills.component.html',
  styleUrls: ['./additional-skills.component.scss']
})
export class AdditionalSkillsComponent implements OnInit {
  codewars_title = "Codewars";
  codewars_subtitle = "My codewars profile";
  codewars_href = "https://www.codewars.com/users/hfrpotgieter";

  codewars_username: string = "";
  codewars_honor: Number = 0;
  codewars_rank: Number = 0;
  codewars_rank_name: string = "";
  codewars_rank_color: string = "";
  codewars_rank_score: Number = 0;;
  codewars_rank_java: string = "";
  codewars_rank_java_name: string = "";
  codewars_rank_java_color: string = "";
  codewars_rank_java_score: Number = 0;
  codewars_challenges_completed: Number = 0;

  constructor(private code_wars_api: CodeWarsApiService) { }

  ngOnInit(): void {
    this.code_wars_api.get_user_info().subscribe((response)=>{
      console.log(response.body);
      this.codewars_username = response.body.username;
      this.codewars_honor = response.body.honor;
      this.codewars_rank = response.body.ranks.overall.rank;
      this.codewars_rank_name = response.body.ranks.overall.name;
      this.codewars_rank_color = response.body.ranks.overall.color;
      this.codewars_rank_score = response.body.ranks.overall.score;
      
      this.codewars_rank_java = response.body.ranks.languages.java.rank;
      this.codewars_rank_java_name = response.body.ranks.languages.java.name;
      this.codewars_rank_java_score = response.body.ranks.languages.java.score;

      this.codewars_challenges_completed = response.body.codeChallenges.totalCompleted;
    })
  }

}
