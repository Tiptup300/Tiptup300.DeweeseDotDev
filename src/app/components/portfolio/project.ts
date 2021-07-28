export interface Project {
    id:string;
    title:string;
    dateRange:string;
    dateRangeDescription:string;
    description:string;
    links?:ProjectLink[];
    tags:string[];
}

export interface ProjectLink {
    title:string;
    url:string;
    openInSameWindow?:boolean;
}