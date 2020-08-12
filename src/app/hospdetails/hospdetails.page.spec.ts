import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospdetailsPage } from './hospdetails.page';

describe('HospdetailsPage', () => {
  let component: HospdetailsPage;
  let fixture: ComponentFixture<HospdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
