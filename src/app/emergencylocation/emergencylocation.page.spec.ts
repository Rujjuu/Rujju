import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencylocationPage } from './emergencylocation.page';

describe('EmergencylocationPage', () => {
  let component: EmergencylocationPage;
  let fixture: ComponentFixture<EmergencylocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencylocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencylocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
