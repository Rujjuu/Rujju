import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdetailsPage } from './docdetails.page';

describe('DocdetailsPage', () => {
  let component: DocdetailsPage;
  let fixture: ComponentFixture<DocdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
