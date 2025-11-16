import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnMailsComponent } from './return-mails.component';

describe('ReturnMailsComponent', () => {
  let component: ReturnMailsComponent;
  let fixture: ComponentFixture<ReturnMailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnMailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
