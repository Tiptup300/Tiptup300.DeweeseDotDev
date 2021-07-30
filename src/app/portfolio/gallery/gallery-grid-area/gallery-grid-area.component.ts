import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/lib/portfolio/project.service';
import { Project } from '../../../../lib/portfolio/project';

@Component({
  selector: 'gallery-grid-area',
  templateUrl: './gallery-grid-area.component.html',
  styleUrls: ['./gallery-grid-area.component.css'],
})
export class GalleryGridArea implements OnInit {
  @Input() projects!: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  getProjectImagePath(project: Project): string {
    return this.projectService.getProjectsImagePath(project.id);
  }
}
