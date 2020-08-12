import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattypePage } from './chattype.page';

describe('ChattypePage', () => {
  let component: ChattypePage;
  let fixture: ComponentFixture<ChattypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
