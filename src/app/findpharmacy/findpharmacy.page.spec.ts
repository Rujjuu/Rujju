import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpharmacyPage } from './findpharmacy.page';

describe('FindpharmacyPage', () => {
  let component: FindpharmacyPage;
  let fixture: ComponentFixture<FindpharmacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpharmacyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindpharmacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
