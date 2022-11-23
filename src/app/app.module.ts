import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EducationComponent } from './Components/education/education.component';
import { ReferencesComponent } from './Components/references/references.component';
import { HonnoursProjectComponent } from './Components/honnours-project/honnours-project.component';
import { HighlightsComponent } from './Components/highlights/highlights.component';
import { AdditionalSkillsComponent } from './Components/additional-skills/additional-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    EducationComponent,
    ReferencesComponent,
    HonnoursProjectComponent,
    HighlightsComponent,
    AdditionalSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
