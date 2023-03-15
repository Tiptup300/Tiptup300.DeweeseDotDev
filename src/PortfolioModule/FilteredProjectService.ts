import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { Project } from './Project';
import { ProjectFiltererService } from './ProjectFiltererService';
import { ProjectTagFilter } from './ProjectTagFilter';

@Injectable({
  providedIn: 'root',
})
export class FilteredProjectService {
  tagFilterChangeSubscription!: Subscription;
  tagFilters: ProjectTagFilter[] = [];

  constructor(private projectFiltererService: ProjectFiltererService) {}

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
