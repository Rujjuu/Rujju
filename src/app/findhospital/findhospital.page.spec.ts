import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindhospitalPage } from './findhospital.page';

describe('FindhospitalPage', () => {
  let component: FindhospitalPage;
  let fixture: ComponentFixture<FindhospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindhospitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindhospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
