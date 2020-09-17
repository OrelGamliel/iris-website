import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGenerationComponent } from './first-generation.component';

describe('FirstGenerationComponent', () => {
  let component: FirstGenerationComponent;
  let fixture: ComponentFixture<FirstGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
