import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrtuctdirtestComponent } from './srtuctdirtest.component';

describe('SrtuctdirtestComponent', () => {
  let component: SrtuctdirtestComponent;
  let fixture: ComponentFixture<SrtuctdirtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrtuctdirtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrtuctdirtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
