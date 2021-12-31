import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EducationComponent } from './Components/education/education.component';
import { ReferencesComponent } from './Components/references/references.component';
import { HonnoursProjectComponent } from './Components/honnours-project/honnours-project.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    EducationComponent,
    ReferencesComponent,
    HonnoursProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
