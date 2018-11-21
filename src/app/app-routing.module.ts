import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'projects/:projectKey', component: ProjectComponent },
  { path: 'toolbox', component: ToolboxComponent },
  { path: 'education', component: EducationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
