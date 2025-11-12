import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorComparisonComponent } from './vendor-comparison.component';

describe('VendorComparisonComponent', () => {
  let component: VendorComparisonComponent;
  let fixture: ComponentFixture<VendorComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
