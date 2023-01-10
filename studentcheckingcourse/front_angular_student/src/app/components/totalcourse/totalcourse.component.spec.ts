import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcourseComponent } from './totalcourse.component';

describe('TotalcourseComponent', () => {
  let component: TotalcourseComponent;
  let fixture: ComponentFixture<TotalcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
