import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register-medico',
  templateUrl: './register-medico.component.html',
  styleUrls: ['./register-medico.component.css']
})
export class RegisterMedicoComponent implements OnInit {
  medicoForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.medicoForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      crm: new FormControl("", [Validators.required, Validators.minLength(1)]),
      nome: new FormControl("", [Validators.required, Validators.minLength(2)]),
      especialidade: new FormControl("", [Validators.required, Validators.minLength(1)]),
      senha: new FormControl("", [Validators.required, Validators.minLength(3)]),
    });
  }

  ngMedico(): void{
    this.authService.medico(this.medicoForm.value).subscribe((msg) => {
      if(msg.auth){
        console.log('autenticado')
        this.router.navigate(['loginMedico'])
      }else{
        console.log('nao autenticado')
      }
    });
  }

}
