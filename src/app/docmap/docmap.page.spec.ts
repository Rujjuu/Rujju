import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocmapPage } from './docmap.page';

describe('DocmapPage', () => {
  let component: DocmapPage;
  let fixture: ComponentFixture<DocmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
