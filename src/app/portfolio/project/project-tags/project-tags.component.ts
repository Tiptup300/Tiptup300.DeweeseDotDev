import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.css']
})
export class ProjectTagsComponent implements OnInit {

  @Input() tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
