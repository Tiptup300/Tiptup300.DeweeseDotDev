import { Component, Input, OnInit } from '@angular/core';
import { ProjectTagFilterService } from 'src/lib_project/ProjectTagFilterService';
import { ProjectTagFilter } from '../../../lib_project/ProjectTagFilter';

@Component({
  selector: 'gallery-filter-box',
  templateUrl: './gallery-filter-box.component.html',
  styleUrls: ['./gallery-filter-box.component.css'],
})
export class GalleryFilterBoxComponent implements OnInit {
  @Input() tagFilters: ProjectTagFilter[] = [];

  constructor(private tagFilterService: ProjectTagFilterService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  checkChanged(tagFilter: ProjectTagFilter) {
    this.tagFilterService.toggleTagFilter(tagFilter.tag);
  }
}
