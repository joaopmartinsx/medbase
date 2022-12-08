import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Consulta } from './consulta';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';
import { ConsultaService } from './consulta.service';



@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  faPencil = faPencil;
  sintomasForm$!: FormGroup;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.sintomasForm$ = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      sintomas: new FormControl("", [Validators.required]),
      tempo: new FormControl("", [Validators.required]),
      medicamento: new FormControl("", [Validators.required]),
      cronico: new FormControl("", [Validators.required]),
      fumante: new FormControl("", [Validators.required]),
      bebida: new FormControl("", [Validators.required]),
      alimento: new FormControl("", [Validators.required]),
      alimentoDiferente: new FormControl("", [Validators.required]),
      cirurgia: new FormControl("", [Validators.required]),
      nome: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required])

    });
  }

  ngSintomas(): void {
    this.consultaService.consulta(this.sintomasForm$.value).subscribe(
      (msg) => {
        if (msg.auth) {
          console.log('autenticado')
        } else {
          console.log('nao autenticado')
        }
      }
    )
  }

}
