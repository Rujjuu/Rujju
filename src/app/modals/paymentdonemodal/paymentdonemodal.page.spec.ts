import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdonemodalPage } from './paymentdonemodal.page';

describe('PaymentdonemodalPage', () => {
  let component: PaymentdonemodalPage;
  let fixture: ComponentFixture<PaymentdonemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentdonemodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentdonemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
