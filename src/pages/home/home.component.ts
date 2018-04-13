import { Component, OnInit } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  public constructor() {
  }

  public ngOnInit(): void {
    //
  }
}
