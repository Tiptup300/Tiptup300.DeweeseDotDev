import { ProjectLinkModel } from './ProjectLinkModel';

export interface ProjectModel {
  id: string;
  title: string;
  dateRange: string;
  dateRangeDescription: string;
  description: string;
  links?: ProjectLinkModel[];
  tags: string[];
}
