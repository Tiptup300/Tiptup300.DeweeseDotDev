import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { GalleryFilterBoxComponent } from './portfolio/gallery/gallery-filter-box/gallery-filter-box.component';
import { GalleryGridArea } from './portfolio/gallery/gallery-grid-area/gallery-grid-area.component';
import { GalleryComponent } from './portfolio/gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectLinksComponent } from './portfolio/project/project-links/project-links.component';
import { ProjectTagsComponent } from './portfolio/project/project-tags/project-tags.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { DotNetDeveloperComponent } from './resume/dot-net-developer/dot-net-developer.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './site/footer/footer.component';
import { HeaderComponent } from './site/header/header.component';
import { NavComponent } from './site/nav/nav.component';
import { NotFoundComponent } from './site/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GalleryComponent,
    GalleryGridArea,
    ProjectComponent,
    ProjectLinksComponent,
    ProjectTagsComponent,
    NotFoundComponent,
    GalleryFilterBoxComponent,
    CoverLetterComponent,
    DotNetDeveloperComponent,
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
