import { ProjectLinkModel } from './ProjectLinkModel';

export class ProjectModel {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly dateRange: string,
    readonly dateRangeDescription: string,
    readonly description: string,
    readonly tags: string[],
    readonly links?: ProjectLinkModel[]
  ) {}
}
