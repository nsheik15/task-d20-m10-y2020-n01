import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCountsComponent } from './total-counts.component';

describe('TotalCountsComponent', () => {
  let component: TotalCountsComponent;
  let fixture: ComponentFixture<TotalCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
