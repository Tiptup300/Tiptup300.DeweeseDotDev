import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { Project } from './Project';
import { ProjectFiltererService } from './ProjectFiltererService';
import { ProjectService } from './ProjectService';
import { ProjectTagFilter } from './ProjectTagFilter';
import { ProjectTagFilterService } from './ProjectTagFilterService';

@Injectable({
  providedIn: 'root',
})
export class FilteredProjectService {
  private subject = new Subject<Observable<Project[]>>();
  private projects!: Observable<Project[]>;

  tagFilterChangeSubscription!: Subscription;
  tagFilters: ProjectTagFilter[] = [];

  constructor(
    private projectService: ProjectService,
    private tagFilterService: ProjectTagFilterService,
    private projectFiltererService: ProjectFiltererService
  ) {}

  public onNextTagFilterFilterProjects(
    projects: Project[],
    tagFilters: Observable<ProjectTagFilter[]>
  ): Observable<Project[]> {
    return new Observable((observer: Observer<Project[]>) => {
      const sub = tagFilters.subscribe((freshTagFilters) => {
        observer.next(
          this.projectFiltererService.filterProjects(projects, freshTagFilters)
        );

        return () => sub.unsubscribe();
      });
    });
  }

  ngOnDestroy() {
    this.tagFilterChangeSubscription.unsubscribe();
  }
}
