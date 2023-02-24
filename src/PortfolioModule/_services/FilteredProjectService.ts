import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { ProjectModel } from '../_models/ProjectModel';
import { ProjectTagFilterModel } from '../_models/ProjectTagFilterModel';
import { ProjectFiltererService } from './ProjectFiltererService';

@Injectable({
  providedIn: 'root',
})
export class FilteredProjectService {
  tagFilterChangeSubscription!: Subscription;
  tagFilters: ProjectTagFilterModel[] = [];

  constructor(private projectFiltererService: ProjectFiltererService) {}

  public onNextTagFilterFilterProjects(
    projects: ProjectModel[],
    tagFilters: Observable<ProjectTagFilterModel[]>
  ): Observable<ProjectModel[]> {
    return new Observable((observer: Observer<ProjectModel[]>) => {
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
