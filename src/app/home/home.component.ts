import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private apocalypseNow: number;
  constructor() {}

  ngOnInit() {
    console.log(new Date(2020, 6, 10, 18, 0, 0));
    this.apocalypseNow = +new Date(2020, 6, 10, 18, 0, 0) - +new Date();
    this.startCountdown();
  }

  startCountdown() {
    let interval = setInterval(() => {
      // console.log(this.apocalypseNow);
      this.apocalypseNow = this.apocalypseNow - 1000;

      if (this.apocalypseNow < 0) {
        // The code here will run when
        // the timer has reached zero.

        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }
}
