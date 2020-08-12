import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktosomeonePage } from './talktosomeone.page';

describe('TalktosomeonePage', () => {
  let component: TalktosomeonePage;
  let fixture: ComponentFixture<TalktosomeonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalktosomeonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktosomeonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
