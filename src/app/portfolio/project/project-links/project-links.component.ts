import { Component, Input, OnInit } from '@angular/core';
import { ProjectLink } from '../../../../lib_project/ProjectLink';

@Component({
  selector: 'project-links',
  templateUrl: './project-links.component.html',
  styleUrls: ['./project-links.component.css']
})
export class ProjectLinksComponent implements OnInit {

  @Input() links!: ProjectLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
