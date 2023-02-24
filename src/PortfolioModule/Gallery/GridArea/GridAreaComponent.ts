import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectModel } from '../../_models/ProjectModel';
import { ProjectService } from '../../_services/ProjectService';

@Component({
  selector: 'gallery-grid-area',
  templateUrl: './GridAreaComponentTemplate.html',
})
export class GridAreaComponent implements OnInit {
  projectsSub!: Subscription;

  @Input() projects: ProjectModel[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  getProjectImagePath(project: ProjectModel): string {
    return this.projectService.getProjectsImagePath(project.id);
  }

  ngOnDestroy(): void {}
}
