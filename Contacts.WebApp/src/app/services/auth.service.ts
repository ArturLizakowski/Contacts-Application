import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  isLoggedIn = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(model: User) {
    return this.httpClient.post<User>(this.baseUrl + 'user/login', model).pipe(
      tap((response: User) => {
        const user = response;
        this.isLoggedIn = true;
      })
    )
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  isAuthenticated() { 
    return this.isLoggedIn;
  } 
}

