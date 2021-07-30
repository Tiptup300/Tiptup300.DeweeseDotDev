import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Project } from '../../../lib/portfolio/project';
import { FilteredProjectService } from '../../../lib/portfolio/filtered-project.service';
import { TagFilter } from 'src/lib/portfolio/tag-filter';
import { ProjectService } from 'src/lib/portfolio/project.service';
import { TagFilterService } from 'src/lib/portfolio/tag-filter.service';
import { ProjectFiltererService } from 'src/lib/portfolio/project-filterer.service';

@Component({
  selector: 'portfolio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  projects!: Project[];
  projectsSub!: Subscription;

  tagFilters!: Observable<TagFilter[]>;

  filteredProjects!: Observable<Project[]>;
  filteredProjectsActual!: Project[];

  constructor(
    private filteredProjectService: FilteredProjectService,
    private projectService: ProjectService,
    private tagFilterService: TagFilterService,
    private projectFiltererService: ProjectFiltererService
  ) {}

  ngOnInit(): void {
    this.subscribeToProjects();
  }
  private subscribeToProjects(): void {
    this.projectsSub = this.projectService
      .getProjects()
      .subscribe((freshProjects) => this.loadFreshProjects(freshProjects));
  }

  private loadFreshProjects(freshProjects: Project[]): void {
    this.projects = freshProjects;
    this.buildTagFilters();
    this.filterProjects();
    this.tagFilterService.update();
  }

  private buildTagFilters() {
    this.tagFilters = this.tagFilterService.setTagFiltersFromProjects(
      this.projects
    );
  }

  private filterProjects() {
    this.filteredProjects =
      this.filteredProjectService.onNextTagFilterFilterProjects(
        this.projects,
        this.tagFilters
      );

    this.filteredProjects.subscribe((x) => {
      this.filteredProjectsActual = x;
    });
  }

  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }
}
