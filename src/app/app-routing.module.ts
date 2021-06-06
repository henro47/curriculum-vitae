import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';

const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'skills',component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
