import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchEmitter {
  public change: EventEmitter<string> = new EventEmitter<string>();
}
