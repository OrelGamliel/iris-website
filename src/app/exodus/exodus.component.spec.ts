import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodusComponent } from './exodus.component';

describe('ExodusComponent', () => {
  let component: ExodusComponent;
  let fixture: ComponentFixture<ExodusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExodusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
