import { Component, Input, OnInit } from '@angular/core';
import { ProjectLink } from '../../../lib_project/ProjectLink';

@Component({
  selector: 'project-links',
  templateUrl: './ProjectLinksComponentTemplate.html',
  styleUrls: ['./ProjectLinksComponentStyle.css'],
})
export class ProjectLinksComponent implements OnInit {
  @Input() links!: ProjectLink[];

  constructor() {}

  ngOnInit(): void {}
}
