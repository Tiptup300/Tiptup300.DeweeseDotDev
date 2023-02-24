import { Component, Input, OnInit } from '@angular/core';
import { ProjectLinkModel } from '../../_models/ProjectLinkModel';

@Component({
  selector: 'project-links',
  templateUrl: './ProjectLinksComponentTemplate.html',
  styleUrls: ['./ProjectLinksComponentStyle.css'],
})
export class ProjectLinksComponent implements OnInit {
  @Input() links!: ProjectLinkModel[];

  constructor() {}

  ngOnInit(): void {}
}
