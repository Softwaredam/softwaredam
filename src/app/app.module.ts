import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SocialComponent } from './social/social.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SoftwaredamIntroComponent } from './softwaredam-intro/softwaredam-intro.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SkillsComponent,
    InfoComponent,
    SkillComponent,
    HomeComponent,
    PageNotFoundComponent,
    SocialComponent,
    PortfolioComponent,
    SoftwaredamIntroComponent,
    ProjectComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
