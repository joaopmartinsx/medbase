import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars, faUser, faPencil } from '@fortawesome/free-solid-svg-icons'
import { AreaMedicaComponent } from '../area-medica/area-medica.component';
import { AuthService } from '../services/auth/auth.service';
import { UsuarioService } from './pagina-usuario.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class PaginaUsuarioComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faPencil = faPencil;

  nome!: Usuario[];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, private service: UsuarioService) { }

  ngOnInit(): void {
    const id = JSON.parse(localStorage.getItem("userId") || "")
    this.service.list(id).subscribe(dados => this.nome = dados)
  }



  receita(): void {
    this.router.navigate(["usuario/receitas"])
  }

  consulta(): void {
    this.router.navigate(["usuario/consulta"])
  }

  atendimento(): void {
    this.router.navigate(["usuario/pronto-atendimento"])
  }

  tecnico(): void {
    this.router.navigate(["usuario/suporte-tecnico"])
  }

}
