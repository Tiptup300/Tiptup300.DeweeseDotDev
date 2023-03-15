import { Injectable } from '@angular/core';
import { Project } from './Project';
import { TagFilter } from './TagFilter';

@Injectable({
  providedIn: 'root',
})
export class ProjectFiltererService {
  constructor() {}

  public filterProjects(
    projects: Project[],
    tagFilters: TagFilter[]
  ): Project[] {
    let output: Project[];

    output = projects.filter((project) =>
      project.tags.some((projectTag) =>
        this.isAnyTagEnabled(tagFilters, projectTag)
      )
    );

    return output;
  }

  private isAnyTagEnabled(
    tagFilters: TagFilter[],
    projectTag: string
  ): unknown {
    return tagFilters.some(
      (tagFilter) => projectTag === tagFilter.tag && tagFilter.enabled == true
    );
  }
}
