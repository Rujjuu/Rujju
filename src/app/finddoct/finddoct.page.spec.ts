import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddoctPage } from './finddoct.page';

describe('FinddoctPage', () => {
  let component: FinddoctPage;
  let fixture: ComponentFixture<FinddoctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddoctPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddoctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
