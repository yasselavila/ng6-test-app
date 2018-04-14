import { Component, OnInit } from '@angular/core';

import { SearchEmitter } from '@app/shared/providers';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent {
  public defaultUsername: string = 'yasselavila';
  public username: string;

  public constructor(private searchEmitter: SearchEmitter) {
    searchEmitter.change
      .subscribe((query: string) => this.username = query);
  }
}
