import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-tags',
  templateUrl: './ProjectTagsComponentTemplate.html',
  styleUrls: ['./ProjectTagsComponentStyle.css'],
})
export class ProjectTagsComponent implements OnInit {
  @Input() tags: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
