import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Project } from '../../../.lib/portfolio/project';
import { FilteredProjectService } from '../../../.lib/portfolio/filtered-project.service';


@Component({
  selector: 'portfolio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  filteredProjectsSubscription!:Subscription;
  projects!: Observable<Project[]>;

  message$!: Observable<string>;
  constructor(private filteredProjectService:FilteredProjectService) { 

    this.filteredProjectsSubscription = this.filteredProjectService.onGetFilteredProjects()
    .subscribe(
      data => {
        this.projects = data;
      }
    )
    this.filteredProjectService.loadFilteredProjects();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.filteredProjectsSubscription.unsubscribe();
  }

}
