import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnReportsComponent } from './return-reports.component';

describe('ReturnReportsComponent', () => {
  let component: ReturnReportsComponent;
  let fixture: ComponentFixture<ReturnReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
