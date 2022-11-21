import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Usuario } from './Usuario';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private readonly API = 'http://localhost:3000/auth/login/:id'
  constructor (private http : HttpClient) {
  }
  list() {
    return this.http.get<Usuario[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
