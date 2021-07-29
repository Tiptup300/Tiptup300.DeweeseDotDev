import { Component, OnInit } from '@angular/core';
import { TagFilter } from '../tag-filter';
import { TagFilterService } from '../tag-filter.service';

@Component({
  selector: 'gallery-filter-box',
  templateUrl: './gallery-filter-box.component.html',
  styleUrls: ['./gallery-filter-box.component.css']
})
export class GalleryFilterBoxComponent implements OnInit {

  tagFilters: TagFilter[] = [];

  constructor(private tagFilterService: TagFilterService) { }

  ngOnInit(): void {
    this.tagFilterService.getTagFilters()
      .subscribe((tagFilters) => {
        this.tagFilters = tagFilters;
      })
  }

}
