import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsBetweenGenerationsComponent } from './conversations-between-generations.component';

describe('ConversationsBetweenGenerationsComponent', () => {
  let component: ConversationsBetweenGenerationsComponent;
  let fixture: ComponentFixture<ConversationsBetweenGenerationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationsBetweenGenerationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationsBetweenGenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
