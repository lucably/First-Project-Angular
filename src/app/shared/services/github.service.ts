import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getReposFromUser(user: String) {
    return this.httpClient.get(`https://api.github.com/users/${user}/repos`);
  }

}
