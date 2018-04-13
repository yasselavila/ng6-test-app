import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  HostListener
} from '@angular/core';

import { ChangeDetectionComponent } from '../change-detection/change-detection.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent extends ChangeDetectionComponent {
  private _offCanvas: boolean = true;
  private _logo: string;
  private _title: string;
  private _navItems: any[];

  public navOpen: boolean = false;

  @Output() public navToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input('offCanvas') set offCanvas(value: boolean) {
    this._offCanvas = (false !== value);
    this.detectChanges();
  }

  get offCanvas(): boolean {
    return !!this._offCanvas;
  }

  @Input('logo') set logo(value: string) {
    this._logo = !!value ? String(value) : null;
    this.detectChanges();
  }

  get logo(): string {
    return this._logo;
  }

  @Input('title') set title(value: string) {
    this._title = !!value ? String(value) : null;
    this.detectChanges();
  }

  get title(): string {
    return this._title;
  }

  @Input('navItems') set navItems(value: any[]) {
    this._navItems = this._navItems;
    this.detectChanges();
  }

  get navItems(): any[] {
    return this._navItems;
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event?: any): void {
    this.toggleNavIfOpen();
  }

  public toggleNavIfOpen(): void {
    if (this.navOpen) {
      this.toggleNav(true);
    }
  }

  public toggleNav(close?: boolean): void {
    this.navOpen = !!close ? false : !this.navOpen;
    this.detectChanges();
    this.navToggled.emit(this.navOpen);
  }

  public stopPropagation(event?: any): void {
    if (event && !!event.stopPropagation) {
      event.stopPropagation();
    }
  }
}
