import { Component, OnInit } from '@angular/core';
import { faBars, faUser, faPencil } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-pagina-medico',
  templateUrl: './pagina-medico.component.html',
  styleUrls: ['./pagina-medico.component.css']
})
export class PaginaMedicoComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faPencil = faPencil;

  constructor() { }

  ngOnInit(): void {
  }

}
