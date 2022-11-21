import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm$!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm$ = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      cpf: new FormControl("", [Validators.required, Validators.minLength(11)]),
      nome: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      idade: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      senha: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  signup(): void {
    this.authService.signup(this.signupForm$.value).subscribe((msg) => {
      if(msg.auth){
        console.log('autenticado')
        this.router.navigate(["area-medica"]);
      }else{
        console.log('nao autenticado')
      }
    });
  }

}
