import { Component, Input, OnInit } from '@angular/core';
import { ProjectTagFilterModel } from '../../_models/ProjectTagFilterModel';
import { ProjectTagFilterService } from '../../_services/ProjectTagFilterService';

@Component({
  selector: 'gallery-filter-box',
  templateUrl: './FilterBoxComponentTemplate.html',
  styleUrls: ['./FilterBoxComponentStyle.css'],
})
export class FilterBoxComponent implements OnInit {
  @Input() tagFilters: ProjectTagFilterModel[] = [];

  constructor(private tagFilterService: ProjectTagFilterService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  checkChanged(tagFilter: ProjectTagFilterModel) {
    this.tagFilterService.toggleTagFilter(tagFilter.tag);
  }
}
