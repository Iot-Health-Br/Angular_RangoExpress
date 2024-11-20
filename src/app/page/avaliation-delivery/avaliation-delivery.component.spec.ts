import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationDeliveryComponent } from './avaliation-delivery.component';

describe('AvaliationDeliveryComponent', () => {
  let component: AvaliationDeliveryComponent;
  let fixture: ComponentFixture<AvaliationDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliationDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliationDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
