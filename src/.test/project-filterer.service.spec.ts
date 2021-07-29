import { TestBed } from '@angular/core/testing';
import { Project } from '../app/components/portfolio/project';
import { TagFilter } from '../app/components/portfolio/gallery/filtered-project.service';

import { ProjectFiltererService } from '../app/components/portfolio/gallery/project-filterer.service';

describe('ProjectFiltererService', () => {
  let service: ProjectFiltererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFiltererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shouldfiltertags', () => {
    let projects: Project[] = [
      {
        id: "project-will-be-enabled",
        title: "",
        description: "",
        dateRange: "",
        dateRangeDescription: "",
        tags: [
          "tagToEnable"
        ]
      },
      {
        id: "project-will-be-disabled",
        title: "",
        description: "",
        dateRange: "",
        dateRangeDescription: "",
        tags: ["tagToDisable"]
      }
    ];
    let tagFilters: TagFilter[] = [
      {
        tag: "tagToEnable",
        count: 1,
        enabled: true
      },
      {
        tag: "tagToDisable",
        count: 1,
        enabled: false
      }
    ];
    expect(service.filterProjects(projects, tagFilters).length === 1);

  });
});
