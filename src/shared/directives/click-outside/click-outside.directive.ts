import { Directive, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() public clickOutside: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (targetElement && !this._elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(event);
    }
  }
}
