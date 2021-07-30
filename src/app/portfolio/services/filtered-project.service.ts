import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Project } from '../project';
import { ProjectService } from './project.service';
import { ProjectFiltererService } from './project-filterer.service';
import { TagFilter } from '../tag-filter';
import { TagFilterService } from './tag-filter.service';

@Injectable({
  providedIn: 'root'
})
export class FilteredProjectService {

  private subject = new Subject<Observable<Project[]>>();
  private projects!: Observable<Project[]>;
  
  tagFilterChangeSubscription!: Subscription;
  tagFilters: TagFilter[] = [];

  constructor(private projectService: ProjectService, private tagFilterService:TagFilterService) {
    this.tagFilterChangeSubscription = this.tagFilterService.onGetTagFilters()
    .subscribe(
      value => {
        this.tagFilters = value
        this.loadFilteredProjects();
      }
    );
  }

  private getFilteredProjects(): Observable<Project[]> {

    let output:Observable<Project[]>;

    let projects = this.projectService.getProjects();
    let tagFilters = this.getTagFilters();
    output = this.filterProjects(projects, tagFilters);

    return output;
  }

  public onGetFilteredProjects() : Observable<Observable<Project[]>> {
    return this.subject.asObservable();
  }

  public loadFilteredProjects() : void {
    let filteredProjects = this.getFilteredProjects();

    this.subject.next(filteredProjects);
  }

  private getTagFilters() : TagFilter[]
  {
    return this.tagFilters;
  }

  private filterProjects(projects:Observable<Project[]>, tagFilters:TagFilter[]) : Observable<Project[]> {
    let output:Observable<Project[]>;

    output = projects.pipe(
      map(
        data => data.filter(
          project => project.tags.some(
            projectTag => this.isAnyTagEnabled(tagFilters, projectTag))))
    );

    return output;
  }

  private isAnyTagEnabled(tagFilters: TagFilter[], projectTag: string): unknown {
    return tagFilters.some(
      tagFilter => projectTag === tagFilter.tag && tagFilter.enabled == true);
  }

  ngOnDestroy(){
    this.tagFilterChangeSubscription.unsubscribe();
  }
}



