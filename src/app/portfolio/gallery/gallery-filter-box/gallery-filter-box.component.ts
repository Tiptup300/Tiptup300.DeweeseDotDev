import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TagFilterService } from 'src/lib/portfolio/tag-filter.service';
import { TagFilter } from '../../../../lib/portfolio/tag-filter';

@Component({
  selector: 'gallery-filter-box',
  templateUrl: './gallery-filter-box.component.html',
  styleUrls: ['./gallery-filter-box.component.css'],
})
export class GalleryFilterBoxComponent implements OnInit {
  @Input() tagFilters!: Observable<TagFilter[]>;

  constructor(private tagFilterService: TagFilterService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  checkChanged(tagFilter: TagFilter) {
    this.tagFilterService.toggleTagFilter(tagFilter.tag);
  }
}
