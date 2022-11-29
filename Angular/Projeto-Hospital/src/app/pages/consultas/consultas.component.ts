import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  faPencil = faPencil;
  sintomasForm$!: FormGroup
  constructor(private authService: ConsultaService, private router: Router) { }

  ngOnInit(): void {
    this.sintomasForm$ = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      sintomas: new FormControl("",[Validators.required, Validators.minLength(2)]),
      tempo: new FormControl("", [Validators.required, Validators.minLength(2)]),
      alergia: new FormControl("", [Validators.required, Validators.minLength(1)]),
      doenca: new FormControl("", [Validators.required, Validators.minLength(1)]),
      diabetes: new FormControl("", [Validators.required, Validators.minLength(1)])
    });
  }

  sintomas(): void{
    this.authService.consulta(this.sintomasForm$.value).subscribe((msg) => {
      if(msg.auth){
        console.log('autenticado')
        console.log(this.sintomasForm$)
      }else{
        console.log('nao autenticado')
        console.log(this.sintomasForm$)
      }
    })
  }

}
