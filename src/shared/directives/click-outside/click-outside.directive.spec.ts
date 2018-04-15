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
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'test-component',
  template: '<div (clickOutside)="myEvent()"></div>'
})
class TestComponent {
  public myEvent(): void {
  }
}

describe('[Shared] Directive: Click Outside', () => {
  let fixture: ComponentFixture<TestComponent>;
  let cmp: TestComponent;
  let element: any;
  let des: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ClickOutsideDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(ClickOutsideDirective));
  });

  it('should create the directive', () => {
    expect(des.length).toBe(1);
  });
});
