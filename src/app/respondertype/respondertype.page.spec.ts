import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondertypePage } from './respondertype.page';

describe('RespondertypePage', () => {
  let component: RespondertypePage;
  let fixture: ComponentFixture<RespondertypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondertypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondertypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
