import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesFeedbackComponent } from './issues-feedback.component';

describe('IssuesFeedbackComponent', () => {
  let component: IssuesFeedbackComponent;
  let fixture: ComponentFixture<IssuesFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssuesFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
