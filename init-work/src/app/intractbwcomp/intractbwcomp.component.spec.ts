import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntractbwcompComponent } from './intractbwcomp.component';

describe('IntractbwcompComponent', () => {
  let component: IntractbwcompComponent;
  let fixture: ComponentFixture<IntractbwcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntractbwcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntractbwcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
