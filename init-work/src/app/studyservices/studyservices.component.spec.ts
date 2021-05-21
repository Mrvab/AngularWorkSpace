import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyservicesComponent } from './studyservices.component';

describe('StudyservicesComponent', () => {
  let component: StudyservicesComponent;
  let fixture: ComponentFixture<StudyservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
