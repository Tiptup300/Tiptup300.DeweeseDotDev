import { Injectable } from '@angular/core';
import { ProjectModel } from '../_models/ProjectModel';
import { ProjectTagFilterModel } from '../_models/ProjectTagFilterModel';

@Injectable({
  providedIn: 'root',
})
export class ProjectFiltererService {
  constructor() {}

  public filterProjects(
    projects: ProjectModel[],
    tagFilters: ProjectTagFilterModel[]
  ): ProjectModel[] {
    let output: ProjectModel[];

    output = projects.filter((project) =>
      project.tags.some((projectTag) =>
        this.isAnyTagEnabled(tagFilters, projectTag)
      )
    );

    return output;
  }

  private isAnyTagEnabled(
    tagFilters: ProjectTagFilterModel[],
    projectTag: string
  ): unknown {
    return tagFilters.some(
      (tagFilter) => projectTag === tagFilter.tag && tagFilter.enabled == true
    );
  }
}
