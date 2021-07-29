import { TestBed } from '@angular/core/testing';
import { Project } from '../project';

import { FilteredProjectService, TagFilter } from './filtered-project.service';

describe('FilteredProjectService', () => {
  let service: FilteredProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteredProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});