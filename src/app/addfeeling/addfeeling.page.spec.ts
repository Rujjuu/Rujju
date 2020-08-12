import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeelingPage } from './addfeeling.page';

describe('AddfeelingPage', () => {
  let component: AddfeelingPage;
  let fixture: ComponentFixture<AddfeelingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfeelingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeelingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
