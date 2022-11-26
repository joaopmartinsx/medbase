import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Usuario } from './Usuario';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private readonly API = 'http://localhost:3000/auth/login'
  constructor (private http : HttpClient) {
  }
  list(id: number) {
    return this.http.get<Usuario[]>(`${this.API}/${id}`)
    .pipe(
      (res) => res,
      (err) => err
    );
  }
}

// pegar semelhante ao service de login e passar somente os dados que quero que aparecea na tela * c
// usaR o mesmo tipo de listagem para os medicos e passar os dados 