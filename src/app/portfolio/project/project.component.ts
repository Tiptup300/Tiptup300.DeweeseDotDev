import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/lib/portfolio/ProjectService';
import { Project } from '../../../lib/portfolio/Project';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectLoadError!: string;
  private subscription!: Subscription;

  private projectImagesPath: string = 'assets/projects/';

  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.getProjectIdFromRoute();
    this.subscription = this.projectService.getProject(projectId).subscribe(
      (project) => (this.project = project),
      (error) => (this.projectLoadError = error)
    );
  }

  getProjectImagePath(): string {
    return this.projectService.getProjectsImagePath(this.project.id);
  }

  getProjectIdFromRoute(): string {
    return this.route.snapshot.params['id'];
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
