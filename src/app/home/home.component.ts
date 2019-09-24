import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apocalypseNow: number;
  isConnected: Boolean;
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
    this.isConnected = false;
    this.route.fragment.subscribe(fragment => {
      const accessToken = fragment.slice(fragment.indexOf('access_token=') + 13, fragment.indexOf('&'));
      this.spotifyService.setAccessToken(accessToken);
      this.spotifyService.getSpotifyUser().subscribe(user => {
        this.isConnected = true;
        console.log(user);
      });
    });
  }

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

  startOverdoseSoundSystem() {
    this.spotifyService.login();
  }
  // 40D4a6IL9rXfOEARENUKVS
  // set it in the wrapper
  //   var spotifyApi = new SpotifyWebApi();
  //   spotifyApi.setAccessToken('<here_your_access_token>');
  //   spotifyApi.getUserPlaylists('jmperezperez')
  //     .then(function (data) {
  //       console.log('User playlists', data);
  //     }, function (err) {
  //       console.error(err);
  //     });
  // }
}
