import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { EducationComponent } from './Components/education/education.component';
import { ReferencesComponent } from './Components/references/references.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { HonnoursProjectComponent } from './Components/honnours-project/honnours-project.component' ;

const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'skills',component:SkillsComponent},
  {path:'references',component:ReferencesComponent},
  {path: 'honnours-project', component:HonnoursProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
