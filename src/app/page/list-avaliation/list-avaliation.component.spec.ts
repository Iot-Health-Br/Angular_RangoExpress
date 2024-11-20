import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvaliationComponent } from './list-avaliation.component';

describe('ListAvaliationComponent', () => {
  let component: ListAvaliationComponent;
  let fixture: ComponentFixture<ListAvaliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAvaliationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAvaliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
