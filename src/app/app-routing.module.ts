import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverLetterComponent } from '../mod_coverLetter/cover-letter.component';
import { GalleryComponent } from '../PortfolioModule/Gallery/GalleryComponent';
import { PortfolioComponent } from '../PortfolioModule/Portfolio/PortfolioComponent';
import { NotFoundComponent } from '../_UICommonLibrary/not-found/not-found.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'cover-letter', component: CoverLetterComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: 'project/:id',
        component: ProjectComponent,
      },
      {
        path: '',
        component: GalleryComponent,
      },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
