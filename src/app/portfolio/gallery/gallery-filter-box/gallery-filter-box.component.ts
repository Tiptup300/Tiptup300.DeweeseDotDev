import { Component, Input, OnInit } from '@angular/core';
import { TagFilterService } from 'src/_PortfolioLibrary/TagFilterService';
import { TagFilter } from '../../../../_PortfolioLibrary/TagFilter';

@Component({
  selector: 'gallery-filter-box',
  templateUrl: './gallery-filter-box.component.html',
  styleUrls: ['./gallery-filter-box.component.css'],
})
export class GalleryFilterBoxComponent implements OnInit {
  @Input() tagFilters: TagFilter[] = [];

  constructor(private tagFilterService: TagFilterService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  checkChanged(tagFilter: TagFilter) {
    this.tagFilterService.toggleTagFilter(tagFilter.tag);
  }
}
