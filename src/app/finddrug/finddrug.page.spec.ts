import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddrugPage } from './finddrug.page';

describe('FinddrugPage', () => {
  let component: FinddrugPage;
  let fixture: ComponentFixture<FinddrugPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddrugPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddrugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
