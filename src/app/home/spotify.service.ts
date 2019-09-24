import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private accessToken: string;
  private spotifyApiUrl: string = 'https://api.spotify.com/v1/';

  constructor(private httpClient: HttpClient) {}

  login() {
    const client_id = 'f09b59e0637a4f70b856a4c122e29b19';
    const scopes = 'user-read-private user-read-email';
    // const redirect_uri = 'https://www.estcequecestbientotledecibulles.com/callback';
    const redirect_uri = 'http://localhost:4200';
    const spotifyUrl = 'https://accounts.spotify.com/authorize';
    const urlWithParams =
      spotifyUrl +
      '?' +
      'client_id=' +
      client_id +
      '&' +
      'redirect_uri=' +
      encodeURIComponent(redirect_uri) +
      '&' +
      'response_type=' +
      'token';

    window.location.replace(urlWithParams);
  }

  // getAccessToken() {
  //     console.log(this.accessToken);
  // }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  getSpotifyUser() {
    return this.httpClient.get(this.spotifyApiUrl + 'me', {
      headers: {
        Authorization: 'Bearer ' + this.accessToken
      }
    });
  }
}
