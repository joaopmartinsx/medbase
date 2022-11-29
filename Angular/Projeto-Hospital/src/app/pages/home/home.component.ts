import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPencil, faPills } from '@fortawesome/free-solid-svg-icons';
import { Receita } from './home';
import { ReceitaService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listar!:  Receita[];
  faPencil = faPencil;
  faPills = faPills;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ReceitaService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.listar = dados)
  }

}
