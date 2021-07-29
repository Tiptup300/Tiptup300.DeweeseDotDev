import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFilterBoxComponent } from '../app/components/portfolio/gallery/gallery-filter-box/gallery-filter-box.component';

describe('GalleryFilterBoxComponent', () => {
  let component: GalleryFilterBoxComponent;
  let fixture: ComponentFixture<GalleryFilterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryFilterBoxComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
