/* eslint-disable linebreak-style */
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 
import { Observable } from 'rxjs';

@Injectable() 
export class GithubFollowersService { 
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: Http) {  }

  getFollowers() : Observable<string> {  
      return this.http.get(this._url)
          .map(response => response.json()); 
  }
}
