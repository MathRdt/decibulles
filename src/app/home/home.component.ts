import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private apocalypseNow: Date;
  constructor() {}

  ngOnInit() {
    this.apocalypseNow = new Date(2020, 7, 10, 18, 0, 0);
  }
}
