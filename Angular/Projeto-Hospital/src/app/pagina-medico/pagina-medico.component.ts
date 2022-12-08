import { Component, OnInit } from '@angular/core';
import { faBars, faUser, faPencil } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicoservice } from './pagina-medico.service';
import { Medico } from '../models/medico/Medico';


@Component({
  selector: 'app-pagina-medico',
  templateUrl: './pagina-medico.component.html',
  styleUrls: ['./pagina-medico.component.css']
})
export class PaginaMedicoComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faPencil = faPencil;
  nome!: Medico[]

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute, private service: Medicoservice) { }

  ngOnInit(): void {
    const id = JSON.parse(localStorage.getItem("userId") || "")
    this.service.list(id).subscribe(dados => this.nome = dados)
  }

}
