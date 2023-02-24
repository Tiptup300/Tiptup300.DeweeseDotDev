import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectModel } from '../_models/ProjectModel';
import { ProjectTagFilterModel } from '../_models/ProjectTagFilterModel';
import { FilteredProjectService } from '../_services/FilteredProjectService';
import { ProjectService } from '../_services/ProjectService';
import { ProjectTagFilterService } from '../_services/ProjectTagFilterService';

@Component({
  selector: 'portfolio-gallery',
  templateUrl: './GalleryComponentTemplate.html',
})
export class GalleryComponent implements OnInit {
  projects!: ProjectModel[];
  projectsSub!: Subscription;
  projectsLoadError!: string;

  tagFilters$!: Observable<ProjectTagFilterModel[]>;
  tagFilters!: ProjectTagFilterModel[];
  tagFiltersSub!: Subscription;

  filteredProjects$!: Observable<ProjectModel[]>;
  filteredProjects!: ProjectModel[];
  filteredProjectsSub!: Subscription;

  constructor(
    private filteredProjectService: FilteredProjectService,
    private projectService: ProjectService,
    private tagFilterService: ProjectTagFilterService
  ) {}

  ngOnInit(): void {
    this.subscribeToProjects();
  }

  private subscribeToProjects(): void {
    this.projectsSub = this.projectService.getProjects().subscribe(
      (freshProjects) => {
        freshProjects.sort((a, b) =>
          a.dateRange > b.dateRange ? 1 : b.dateRange > a.dateRange ? -1 : 0
        );
        this.loadFreshProjects(freshProjects);
        this.projectsSub.unsubscribe();
      },
      (error) => {
        this.projectsLoadError = error;
      }
    );
  }

  private loadFreshProjects(freshProjects: ProjectModel[]): void {
    this.projects = freshProjects;
    this.buildTagFilters();
    this.filterProjects();
    this.tagFilterService.update();
  }

  private buildTagFilters() {
    this.tagFilters$ = this.tagFilterService.setTagFiltersFromProjects(
      this.projects
    );

    this.tagFiltersSub = this.tagFilters$.subscribe((x) => {
      this.tagFilters = x;
    });
  }

  private filterProjects() {
    this.filteredProjects$ =
      this.filteredProjectService.onNextTagFilterFilterProjects(
        this.projects,
        this.tagFilters$
      );

    this.filteredProjectsSub = this.filteredProjects$.subscribe((x) => {
      this.filteredProjects = x;
    });
  }

  ngOnDestroy(): void {
    if (this.projectsSub) this.projectsSub.unsubscribe();
    if (this.tagFiltersSub) this.tagFiltersSub.unsubscribe();
    if (this.filteredProjectsSub) this.filteredProjectsSub.unsubscribe();
  }
}
