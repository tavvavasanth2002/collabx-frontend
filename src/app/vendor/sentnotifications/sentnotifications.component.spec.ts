import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentnotificationsComponent } from './sentnotifications.component';

describe('SentnotificationsComponent', () => {
  let component: SentnotificationsComponent;
  let fixture: ComponentFixture<SentnotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentnotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
