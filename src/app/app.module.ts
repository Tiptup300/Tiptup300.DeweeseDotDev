import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { GalleryComponent } from './components/portfolio/gallery/gallery.component';
import { GalleryImageComponent } from './components/portfolio/gallery/gallery-image/gallery-image.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { ProjectLinksComponent } from './components/portfolio/project/project-links/project-links.component';
import { ProjectTagsComponent } from './components/portfolio/project/project-tags/project-tags.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GalleryFilterBoxComponent } from './components/portfolio/gallery/gallery-filter-box/gallery-filter-box.component';

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
