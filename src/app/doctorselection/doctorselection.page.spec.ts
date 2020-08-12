import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorselectionPage } from './doctorselection.page';

describe('DoctorselectionPage', () => {
  let component: DoctorselectionPage;
  let fixture: ComponentFixture<DoctorselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
