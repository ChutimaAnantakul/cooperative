import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalstudyplanComponent } from './totalstudyplan.component';

describe('TotalstudyplanComponent', () => {
  let component: TotalstudyplanComponent;
  let fixture: ComponentFixture<TotalstudyplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalstudyplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalstudyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
