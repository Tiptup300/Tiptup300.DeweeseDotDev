import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CoverLetterComponent } from '../mod_coverLetter/cover-letter.component';
import { PortfolioComponent } from '../_m_portfolio/portfolio.component';
import { GalleryFilterBoxComponent } from '../_m_portfolio/_portfolio_gallery/FilterBox/FilterBoxComponent';
import { GalleryComponent } from '../_m_portfolio/_portfolio_gallery/GalleryComponent';
import { GridAreaComponent } from '../_m_portfolio/_portfolio_gallery/GridArea/GridAreaComponent';
import { FooterComponent } from '../_UICommonLibrary/footer/footer.component';
import { HeaderComponent } from '../_UICommonLibrary/header/header.component';
import { NavComponent } from '../_UICommonLibrary/nav/nav.component';
import { NotFoundComponent } from '../_UICommonLibrary/not-found/not-found.component';
import { AppComponent } from './app.component';
import { ProjectLinksComponent } from './portfolio/project/project-links/project-links.component';
import { ProjectTagsComponent } from './portfolio/project/project-tags/project-tags.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GalleryComponent,
    GridAreaComponent,
    ProjectComponent,
    ProjectLinksComponent,
    ProjectTagsComponent,
    NotFoundComponent,
    GalleryFilterBoxComponent,
    CoverLetterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
