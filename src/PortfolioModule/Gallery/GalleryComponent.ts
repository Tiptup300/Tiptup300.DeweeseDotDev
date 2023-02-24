import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectTagFilter } from 'src/PortfolioModule/ProjectTagFilter';
import { FilteredProjectService } from '../FilteredProjectService';
import { Project } from '../Project';
import { ProjectFiltererService } from '../ProjectFiltererService';
import { ProjectService } from '../ProjectService';
import { ProjectTagFilterService } from '../ProjectTagFilterService';

@Component({
  selector: 'portfolio-gallery',
  templateUrl: './GalleryComponent.html',
})
export class GalleryComponent implements OnInit {
  projects!: Project[];
  projectsSub!: Subscription;
  projectsLoadError!: string;

  tagFilters$!: Observable<ProjectTagFilter[]>;
  tagFilters!: ProjectTagFilter[];
  tagFiltersSub!: Subscription;

  filteredProjects$!: Observable<Project[]>;
  filteredProjects!: Project[];
  filteredProjectsSub!: Subscription;

  constructor(
    private filteredProjectService: FilteredProjectService,
    private projectService: ProjectService,
    private tagFilterService: ProjectTagFilterService,
    private projectFiltererService: ProjectFiltererService
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

  private loadFreshProjects(freshProjects: Project[]): void {
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
