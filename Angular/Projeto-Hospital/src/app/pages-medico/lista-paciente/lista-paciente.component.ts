import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaPaciente } from '../consulta-paciente/consulta-paciente';
import { PacienteService } from '../consulta-paciente/paciente-consulta.service';
import { listagemService } from './lista-paciente.service';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {
  pacientes!: ConsultaPaciente[];
  constructor(private router: Router, private service: listagemService, private services: PacienteService,
    private location: Location) { }

  ngOnInit(): void {
    const id = parseInt(this.location.path().split('/')[3])
    this.service.paciente(id).subscribe(dados => this.pacientes = dados)
    console.log("esse é o id", (this.location.path().split('/')[3]))
  }

}
