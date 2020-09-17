import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclimationInIsraelComponent } from './acclimation-in-israel.component';

describe('AcclimationInIsraelComponent', () => {
  let component: AcclimationInIsraelComponent;
  let fixture: ComponentFixture<AcclimationInIsraelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcclimationInIsraelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclimationInIsraelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
