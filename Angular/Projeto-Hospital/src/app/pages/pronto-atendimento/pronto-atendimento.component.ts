import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Atendimento } from './pronto-atendimento';
import { ProntoAtendimentoService } from './pronto-atendimento.service';

@Component({
  selector: 'app-pronto-atendimento',
  templateUrl: './pronto-atendimento.component.html',
  styleUrls: ['./pronto-atendimento.component.css']
})
export class ProntoAtendimentoComponent implements OnInit {
  listar!: Atendimento[];
  faDoctor = faUserDoctor;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ProntoAtendimentoService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.listar = dados)
  }





}
