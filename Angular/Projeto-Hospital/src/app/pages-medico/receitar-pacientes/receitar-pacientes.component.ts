import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { receita } from './receita';
import { ReceitaService } from 'src/app/pages/home/home.service';
import { receitaService } from './receita.service';

@Component({
  selector: 'app-receitar-pacientes',
  templateUrl: './receitar-pacientes.component.html',
  styleUrls: ['./receitar-pacientes.component.css']
})
export class ReceitarPacientesComponent implements OnInit {
  receitasForm$!: FormGroup;


  constructor(private receitaService: receitaService) { }

  ngOnInit(): void {
    this.receitasForm$ = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      remedios: new FormControl("", [Validators.required]),
      receita: new FormControl("", [Validators.required]),

    });
  }

  ngReceitas(): void {
    this.receitaService.receita(this.receitasForm$.value).subscribe(
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
