import { Injectable } from '@angular/core';
import { Project } from './Project';
import { ProjectTagFilter } from './ProjectTagFilter';

@Injectable({
  providedIn: 'root',
})
export class ProjectFiltererService {
  constructor() {}

  public filterProjects(
    projects: Project[],
    tagFilters: ProjectTagFilter[]
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
    tagFilters: ProjectTagFilter[],
    projectTag: string
  ): unknown {
    return tagFilters.some(
      (tagFilter) => projectTag === tagFilter.tag && tagFilter.enabled == true
    );
  }
}
