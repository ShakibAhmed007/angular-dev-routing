import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }

  checkAuthentication() {
    return this.isLoggedIn;
  }
}
