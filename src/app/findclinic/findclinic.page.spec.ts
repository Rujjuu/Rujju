import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindclinicPage } from './findclinic.page';

describe('FindclinicPage', () => {
  let component: FindclinicPage;
  let fixture: ComponentFixture<FindclinicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindclinicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindclinicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
