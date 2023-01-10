import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscourseComponent } from './passcourse.component';

describe('PasscourseComponent', () => {
  let component: PasscourseComponent;
  let fixture: ComponentFixture<PasscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasscourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
