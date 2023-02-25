import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './AppRoutingModule';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../CommonUIModule/_components/FooterComponent/FooterComponent';
import { HeaderComponent } from '../CommonUIModule/_components/HeaderComponent/HeaderComponent';
import { NavBarComponent } from '../CommonUIModule/_components/NavBarComponent/NavBarComponent';
import { NotFoundComponent } from '../CommonUIModule/_components/NotFoundComponent/NotFoundComponent';
import { MediatorService } from '../CommonUIModule/_services/MediatorService/MediatorService';
import { CoverLetterComponent } from '../CoverLetterModule/CoverLetterComponent';
import { FilterBoxComponent } from '../PortfolioModule/Gallery/FilterBox/FilterBoxComponent';
import { GalleryComponent } from '../PortfolioModule/Gallery/GalleryComponent';
import { GridAreaComponent } from '../PortfolioModule/Gallery/GridArea/GridAreaComponent';
import { PortfolioComponent } from '../PortfolioModule/PortfolioComponent';
import { ProjectComponent } from '../PortfolioModule/Project/ProjectComponent';
import { ProjectLinksComponent } from '../PortfolioModule/Project/ProjectLinks/ProjectLinksComponent';
import { ProjectTagsComponent } from '../PortfolioModule/Project/ProjectTags/ProjectTagsComponent';
import { ResumeComponent } from '../ResumeModule/ResumeComponent';
import { AppComponent } from './AppComponent';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    GalleryComponent,
    GridAreaComponent,
    ProjectComponent,
    ProjectLinksComponent,
    ProjectTagsComponent,
    NotFoundComponent,
    FilterBoxComponent,
    CoverLetterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [MediatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
