import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Project } from './project';
import { ProjectService } from './project.service';
import { TagFilter } from './tag-filter';

@Injectable({
  providedIn: 'root'
})
export class TagFilterService {
  private subscription!:Subscription;

  private subject = new Subject<TagFilter[]>();
  private tagFilters: TagFilter[] = [];

  constructor(private projectService: ProjectService) {
   // this.loadTagFilters();
  }

  public onGetTagFilters() : Observable<TagFilter[]> {
    return this.subject.asObservable();
  }

  public loadTagFilters() {
    if(!this.subscription)
    {
      this.subscription = this.projectService.getProjects()
        .subscribe((projects) => {
          this.tagFilters =  this.buildTagFiltersFromProjects(projects);
            this.tagFilters.sort((a,b) => { return b.count - a.count;});
          this.subscription.unsubscribe();
        });
    }

    this.subject.next(this.tagFilters);
  }

  public buildTagFiltersFromProjects(projects: Project[]) {
    let output: TagFilter[];

    output = [];
    projects.forEach(project => {
      if (project) {
        Array.from(project.tags).forEach(tag => {
          if (this.isNewTag(tag, output)) {
            output.push(this.buildNewTagFilter(tag));
          }
          else {
            this.increaseTagFilterCount(tag, output);
          }
        })
      }
    });

    return output;
  }

  public toggleTagFilter(tag:string) : void {
    let tagFilter = this.getTagFilter(tag);
    tagFilter.enabled = !tagFilter.enabled;

    this.subject.next(this.tagFilters);
  }

  public cropToTagFilter(tag:string) : void {
    this.tagFilters.forEach(value => {
      if(value.tag == tag)
      {
        value.enabled = true;
      }
      else
      {
        value.enabled = false;
      }
    })

    this.subject.next(this.tagFilters);
  }

  private getTagFilter(tag:string) : TagFilter {
    return this.tagFilters.find(tagFilter => tagFilter.tag == tag)!;
  }

  private buildNewTagFilter(tag: string): TagFilter {
    return {
      tag: tag,
      count: 1,
      enabled: true
    };
  }

  private increaseTagFilterCount(tag: string, tags: TagFilter[]) {
    var tagToIncrease: TagFilter = tags.find((insideTag) => insideTag.tag == tag)!;
    tagToIncrease.count++;
  }


  private isNewTag(tag: string, output: TagFilter[]) {
    return output.some(outputTag => outputTag.tag === tag) === false;
  }
}
