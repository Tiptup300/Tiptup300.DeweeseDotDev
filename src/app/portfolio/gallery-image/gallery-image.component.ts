import { Component, Inject, Input, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})
export class GalleryImageComponent implements OnInit {

  @Input() project!: Project;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  getProjectImagePath(): string {
    return this.projectService.getProjectsImagePath(this.project.id);
  }
}
