import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeoperationComponent } from './pipeoperation.component';

describe('PipeoperationComponent', () => {
  let component: PipeoperationComponent;
  let fixture: ComponentFixture<PipeoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
