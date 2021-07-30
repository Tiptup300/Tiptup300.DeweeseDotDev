import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/lib/portfolio/project.service';
import { Project } from '../../../../lib/portfolio/project';

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
