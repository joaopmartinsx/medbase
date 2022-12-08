import { Component, OnInit } from '@angular/core';
import { ConsultaPaciente } from './consulta-paciente';
import { consultaService } from './consulta-paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './paciente-consulta.service';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.component.html',
  styleUrls: ['./consulta-paciente.component.css']
})
export class ConsultaPacienteComponent implements OnInit {
  paciente!: ConsultaPaciente[];
  constructor(private router: Router, private service: consultaService, private services: PacienteService) { }

  ngOnInit(): void {
    this.service.paciente().subscribe(dados => this.paciente = dados)
  }

  teste(): void {
    const id = JSON.parse(localStorage.getItem("userId") || "")
  }

  teste1(id: number): void {
    this.router.navigate(['telaMedico/Paciente/', id])
    console.log(id)
  }

}
