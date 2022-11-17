import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../../models/login/LoginModel';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(){
    return this.httpClient.get<LoginModel>('http://localhost:3000/umlogin').pipe(
      (res) => res,
      (err) => err
    )
  }
}
