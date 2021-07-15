import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../views/login/loginModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  public hacerLogin(loginData: login) {
    var url = 'http://127.0.0.1/api/login';
    return this._httpClient.post(url, loginData);
  }
}
