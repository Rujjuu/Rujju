import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugdetailsPage } from './drugdetails.page';

describe('DrugdetailsPage', () => {
  let component: DrugdetailsPage;
  let fixture: ComponentFixture<DrugdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
