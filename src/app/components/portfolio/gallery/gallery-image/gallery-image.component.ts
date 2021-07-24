import { Component, Inject, Input, OnInit } from '@angular/core';
import { Project } from '../../project';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})
export class GalleryImageComponent implements OnInit {

  @Input() project!:Project;
  constructor() { }

  ngOnInit(): void {
  }

}
