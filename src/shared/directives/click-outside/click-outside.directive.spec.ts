/**
 * Bist ERP (https://bist.mx)
 * Library: Material Dashboard
 *
 * WARNING: The source code in this file is protected by copyright laws, unauthorized use,
 * duplication or redistribution may result in civil liability and criminal prosecution.
 *
 * @copyright Copyright (c) 2017 - 2018, Rocket Labs (http://rocketlabs.mx)
 * @license   See LICENSE.txt
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickOutsideDirective } from './click-outside.component';

describe('[Lib: Material-dashboard] Directive: Click Outside', () => {
  let fixture: ComponentFixture<ClickOutsideDirective>;
  let directive: ClickOutsideDirective;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClickOutsideDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickOutsideDirective);
    directive = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });
});
