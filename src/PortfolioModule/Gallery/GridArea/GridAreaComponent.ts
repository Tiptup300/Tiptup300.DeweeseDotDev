import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/lib_project/ProjectService';
import { Project } from '../../../lib_project/Project';

@Component({
  selector: 'gallery-grid-area',
  templateUrl: './GridAreaComponent.html',
})
export class GridAreaComponent implements OnInit {
  projectsSub!: Subscription;

  @Input() projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  getProjectImagePath(project: Project): string {
    return this.projectService.getProjectsImagePath(project.id);
  }

  ngOnDestroy(): void {}
}
