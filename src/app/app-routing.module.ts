import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryComponent } from './components/portfolio/gallery/gallery.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: 'project/:id',
        component: ProjectComponent,
      },
      {
        path: '**',
        component: GalleryComponent
      }
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
