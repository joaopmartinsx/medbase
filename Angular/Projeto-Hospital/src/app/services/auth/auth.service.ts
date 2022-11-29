import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';


import { User } from 'src/app/models/user/User';
import { ErrorHandlerService } from '../error/error-handler.service';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/medico/Medico';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId!: Pick<User, "id">

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router) { }

  listarNome(){
    return this.http.get<User>('http://localhost:3000/auth/signup').pipe(
      (res) => res,
      (err) => err,
    )
  }

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    )
  }
  login(cpf: Pick<User, "cpf">, senha: Pick<User, "senha">): Observable<{
    token: string; userId: Pick<User, "id">;
  }> {
    return this.http.post(`${this.url}/login`, { cpf, senha }, this.httpOptions).pipe(
      first(),
      tap((tokenObject: any) => {
        this.userId = tokenObject.userId;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["usuario"])
      }),
      catchError(this.errorHandlerService.handleError<{
        token: string; userId: Pick<User, "id">
      }>("login"))
    )
  }
  medico(medico: Omit<Medico, "id">): Observable<Medico> {
    return this.http.post<Medico>('http://localhost:4000/auth/Medico', medico, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Medico>("medico"))
    )
  }
  loginMedico(crm: Pick<Medico, "crm">, senha: Pick<User, "senha">): Observable<{
    token: string; userId: Pick<User, "id">;
  }> {
    return this.http.post('http://localhost:4000/auth/loginMedico', { crm, senha }, this.httpOptions).pipe(
      first(),
      tap((tokenObject: any) => {
        this.userId = tokenObject.userId;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["usuario"])
      }),
      catchError(this.errorHandlerService.handleError<{
        token: string; userId: Pick<User, "id">
      }>("loginMedico"))
    )
  }

}


// usar semelhante ao login para dar um select da postagem do id *