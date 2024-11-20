import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryComponent } from './list-delivery.component';

describe('ListDeliveryComponent', () => {
  let component: ListDeliveryComponent;
  let fixture: ComponentFixture<ListDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
