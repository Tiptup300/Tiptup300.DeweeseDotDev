import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectFiltererService } from './project-filterer.service';
import { TagFilter } from './tag-filter';
import { TagFilterService } from './tag-filter.service';

@Injectable({
  providedIn: 'root'
})
export class FilteredProjectService {

  private tagFilters: TagFilter[] = [];

  constructor(private projectService: ProjectService, private projectFilterer: ProjectFiltererService, private tagFilterService: TagFilterService) {
    tagFilterService.getTagFilters()
      .subscribe((tagFilters) => { this.tagFilters = tagFilters });
  }

  public toggleFilter(tag: string) {

  }

  public getFilteredProjects(): Observable<Project[]> {
    let subject = new Subject<Project[]>();

    this.projectService
      .getProjects()
      .subscribe(
        (projects) => {
          subject.next(this.projectFilterer.filterProjects(projects, this.tagFilters));
        }
      );

    return subject.asObservable();
  }
}



