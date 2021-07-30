import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';
import { NavComponent } from './site/nav/nav.component';
import { GalleryComponent } from './portfolio/gallery/gallery.component';
import { GalleryImageComponent } from './portfolio/gallery-image/gallery-image.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './portfolio/project/project.component';
import { ProjectLinksComponent } from './portfolio/project-links/project-links.component';
import { ProjectTagsComponent } from './portfolio/project-tags/project-tags.component';
import { NotFoundComponent } from './site/not-found/not-found.component';
import { GalleryFilterBoxComponent } from './portfolio/gallery-filter-box/gallery-filter-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GalleryComponent,
    GalleryImageComponent,
    ProjectComponent,
    ProjectLinksComponent,
    ProjectTagsComponent,
    NotFoundComponent,
    GalleryFilterBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
