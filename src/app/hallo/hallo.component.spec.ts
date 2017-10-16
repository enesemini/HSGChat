import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloComponent } from './hallo.component';

describe('HalloComponent', () => {
  let component: HalloComponent;
  let fixture: ComponentFixture<HalloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
