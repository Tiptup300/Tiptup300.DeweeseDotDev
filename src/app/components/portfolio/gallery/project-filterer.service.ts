import { Injectable } from '@angular/core';
import { Project } from '../project';
import { TagFilter } from './tag-filter';

@Injectable({
  providedIn: 'root'
})
export class ProjectFiltererService {

  constructor() { }

  public filterProjects(projects: Project[], tagFilters: TagFilter[]): Project[] {
    let output: Project[];

    output = projects.filter(
      (project) => {
        this.doesProjectHaveADisabledTag(project, tagFilters);
      });

    return output;
  }

  private doesProjectHaveADisabledTag(project: Project, tagFilters: TagFilter[]) {
    project.tags.some(
      (tag) => {
        this.doAnyTagFiltersHaveTag(tagFilters, tag);
      });
  }

  private doAnyTagFiltersHaveTag(tagFilters: TagFilter[], tag: string) {
    tagFilters.some((tagFilter) => {
      tagFilter.enabled && tagFilter.tag === tag;
    });
  }
}
