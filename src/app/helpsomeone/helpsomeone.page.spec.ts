import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpsomeonePage } from './helpsomeone.page';

describe('HelpsomeonePage', () => {
  let component: HelpsomeonePage;
  let fixture: ComponentFixture<HelpsomeonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpsomeonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpsomeonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
