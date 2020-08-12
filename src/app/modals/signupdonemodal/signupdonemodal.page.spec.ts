import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdonemodalPage } from './signupdonemodal.page';

describe('SignupdonemodalPage', () => {
  let component: SignupdonemodalPage;
  let fixture: ComponentFixture<SignupdonemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupdonemodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdonemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
