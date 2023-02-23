import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { Project } from './Project';
import { ProjectFiltererService } from './ProjectFiltererService';
import { ProjectService } from './ProjectService';
import { TagFilter } from './TagFilter';
import { TagFilterService } from './TagFilterService';

@Injectable({
  providedIn: 'root',
})
export class FilteredProjectService {
  private subject = new Subject<Observable<Project[]>>();
  private projects!: Observable<Project[]>;

  tagFilterChangeSubscription!: Subscription;
  tagFilters: TagFilter[] = [];

  constructor(
    private projectService: ProjectService,
    private tagFilterService: TagFilterService,
    private projectFiltererService: ProjectFiltererService
  ) {}

  public onNextTagFilterFilterProjects(
    projects: Project[],
    tagFilters: Observable<TagFilter[]>
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
