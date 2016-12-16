/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es6modulesComponent } from './es6modules.component';

describe('Es6modulesComponent', () => {
  let component: Es6modulesComponent;
  let fixture: ComponentFixture<Es6modulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es6modulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6modulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
