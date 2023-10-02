import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  // Generate token
  public generateToken(loginData:any) {
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  // Login user: set token in local storage
  public loginUser(token:any) {
    localStorage.setItem('token',token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  // Check if user is loggedin or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;6 
    }
  }

  // Logout: remove token from local storage
  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // Get toke from local storage
  public getToken() {
    return localStorage.getItem('token');
  }

  // set userDetails in local storage
  public setUser(user:any) {
    localStorage.setItem('user',JSON.stringify(user));
  }

  // Get user details from local storage
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logOut();
      return null;
    }
  }

  // Get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
