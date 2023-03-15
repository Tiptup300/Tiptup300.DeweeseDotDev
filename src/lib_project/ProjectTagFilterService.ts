import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Project } from './Project';
import { ProjectService } from './ProjectService';
import { ProjectTagFilter } from './ProjectTagFilter';

@Injectable({
  providedIn: 'root',
})
export class ProjectTagFilterService {
  private subscription!: Subscription;

  private subject = new Subject<ProjectTagFilter[]>();
  private tagFilters: ProjectTagFilter[] = [];

  constructor(private projectService: ProjectService) {}

  public setTagFiltersFromProjects(
    projects: Project[]
  ): Observable<ProjectTagFilter[]> {
    this.tagFilters = this.buildTagFiltersFromProjects(projects);

    return this.subject.asObservable();
  }

  public update() {
    this.sendUpdate();
  }

  private sendUpdate(): void {
    this.subject.next(this.tagFilters);
  }

  private buildTagFiltersFromProjects(projects: Project[]) {
    let output: ProjectTagFilter[];

    output = [];
    projects.forEach((project) => {
      if (project) {
        Array.from(project.tags).forEach((tag) => {
          if (this.isNewTag(tag, output)) {
            output.push(this.buildNewTagFilter(tag));
          } else {
            this.increaseTagFilterCount(tag, output);
          }
        });
      }
    });
    output.sort((a, b) => {
      return b.count - a.count;
    });

    return output;
  }

  public toggleTagFilter(tag: string): void {
    let tagFilter = this.getTagFilter(tag);
    tagFilter.enabled = !tagFilter.enabled;

    this.sendUpdate();
  }

  public cropToTagFilter(tag: string): void {
    this.tagFilters.forEach((value) => {
      if (value.tag == tag) {
        value.enabled = true;
      } else {
        value.enabled = false;
      }
    });

    this.sendUpdate();
  }

  private getTagFilter(tag: string): ProjectTagFilter {
    return this.tagFilters.find((tagFilter) => tagFilter.tag == tag)!;
  }

  private buildNewTagFilter(tag: string): ProjectTagFilter {
    return {
      tag: tag,
      count: 1,
      enabled: true,
    };
  }

  private increaseTagFilterCount(tag: string, tags: ProjectTagFilter[]) {
    var tagToIncrease: ProjectTagFilter = tags.find(
      (insideTag) => insideTag.tag == tag
    )!;
    tagToIncrease.count++;
  }

  private isNewTag(tag: string, output: ProjectTagFilter[]) {
    return output.some((outputTag) => outputTag.tag === tag) === false;
  }
}
