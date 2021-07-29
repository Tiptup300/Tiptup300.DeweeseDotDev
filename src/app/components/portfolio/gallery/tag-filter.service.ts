import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { TagFilter } from './tag-filter';

@Injectable({
  providedIn: 'root'
})
export class TagFilterService {

  private tagFilters!: Observable<TagFilter[]>;

  constructor(private projectService: ProjectService) {
    this.tagFilters = this.loadTagFilters();
  }

  public getTagFilters(): Observable<TagFilter[]> {
    return this.tagFilters;
  }

  loadTagFilters(): Observable<TagFilter[]> {
    let subject: Subject<TagFilter[]> = new Subject<TagFilter[]>();

    this.projectService.getProjects()
      .subscribe((projects) => {

        let tagfiltersasdf = this.buildTagFiltersFromProjects(Object.assign({}, projects));

        subject.next(tagfiltersasdf);
      });

    return subject.asObservable();
  }

  private buildTagFiltersFromProjects(projects: Project[]) {
    let output: TagFilter[];

    output = [];
    projects.forEach(project => {
      if (project) {
        Array.from(project.tags).forEach(tag => {
          if (this.isNewTag(tag, output)) {
            output.push(this.buildNewTagFilter(tag));
          }
          else {
            this.increaseTagFilterCount(tag, output);
          }
        })
      }
    });

    return output;
  }

  private buildNewTagFilter(tag: string): TagFilter {
    return {
      tag: tag,
      count: 1,
      enabled: true
    };
  }

  private increaseTagFilterCount(tag: string, tags: TagFilter[]) {
    var tagToIncrease: TagFilter = tags.find((insideTag) => insideTag.tag == tag)!;
    tagToIncrease.count++;
  }


  private isNewTag(tag: string, output: TagFilter[]) {
    return output.some(outputTag => outputTag.tag === tag) === false;
  }
}
