import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetDeveloperComponent } from './dot-net-developer.component';

describe('DotNetDeveloperComponent', () => {
  let component: DotNetDeveloperComponent;
  let fixture: ComponentFixture<DotNetDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
