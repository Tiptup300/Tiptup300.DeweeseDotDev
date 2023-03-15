import { ProjectLink } from "./ProjectLink";

export interface Project {
    id: string;
    title: string;
    dateRange: string;
    dateRangeDescription: string;
    description: string;
    links?: ProjectLink[];
    tags: string[];
}

