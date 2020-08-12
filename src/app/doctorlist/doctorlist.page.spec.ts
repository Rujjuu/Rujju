import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlistPage } from './doctorlist.page';

describe('DoctorlistPage', () => {
  let component: DoctorlistPage;
  let fixture: ComponentFixture<DoctorlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
