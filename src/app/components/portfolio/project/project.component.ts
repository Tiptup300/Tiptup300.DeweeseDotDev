import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { map } from 'rxjs/operators';
import { ProjectService } from '../project.service';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  private projectImagesPath: string = "assets/projects/";

  project!: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {


  }

  ngOnInit(): void {

    const projectId = this.route.snapshot.params['id'];
    this.projectService
      .getProject(projectId)
      .subscribe((project) => (this.project = project));


  }

  getProjectImagePath(): string {
    return this.projectService.getProjectsImagePath(this.project.id);
  }

}
