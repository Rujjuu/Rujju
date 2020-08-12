import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalldocmodalPage } from './calldocmodal.page';

describe('CalldocmodalPage', () => {
  let component: CalldocmodalPage;
  let fixture: ComponentFixture<CalldocmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalldocmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalldocmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
