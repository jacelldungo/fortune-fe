import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginURL = "http://localhost:3000/users/auth"
  private _registerURL = "http://localhost:3000/users"

  constructor( private http: HttpClient) { }

  registerUser(user){
    return this.http.post(this._registerURL, user)
  }

  loginUser(user){
    return this.http.post(this._loginURL, user)
  }

  loggedIn() { 
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
