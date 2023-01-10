import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultcourseComponent } from './faultcourse.component';

describe('FaultcourseComponent', () => {
  let component: FaultcourseComponent;
  let fixture: ComponentFixture<FaultcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
