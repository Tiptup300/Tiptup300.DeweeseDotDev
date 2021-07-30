import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Project } from './project';
import { ProjectService } from './project.service';
import { ProjectFiltererService } from './project-filterer.service';
import { TagFilter } from './tag-filter';
import { TagFilterService } from './tag-filter.service';

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
      tagFilters.subscribe((freshTagFilters) => {
        observer.next(
          this.projectFiltererService.filterProjects(projects, freshTagFilters)
        );
      });
    });
  }

  ngOnDestroy() {
    this.tagFilterChangeSubscription.unsubscribe();
  }
}
