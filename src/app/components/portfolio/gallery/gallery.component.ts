import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';


@Component({
  selector: 'portfolio-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => (this.projects = projects));
  }

}
