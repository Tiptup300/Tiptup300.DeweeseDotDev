import { Component, Input, OnInit } from '@angular/core';
import { ProjectTagFilter } from '../../ProjectTagFilter';
import { ProjectTagFilterService } from '../../ProjectTagFilterService';

@Component({
  selector: 'gallery-filter-box',
  templateUrl: './FilterBoxComponentTemplate.html',
  styleUrls: ['./FilterBoxComponentStyle.css'],
})
export class FilterBoxComponent implements OnInit {
  @Input() tagFilters: ProjectTagFilter[] = [];

  constructor(private tagFilterService: ProjectTagFilterService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  checkChanged(tagFilter: ProjectTagFilter) {
    this.tagFilterService.toggleTagFilter(tagFilter.tag);
  }
}
