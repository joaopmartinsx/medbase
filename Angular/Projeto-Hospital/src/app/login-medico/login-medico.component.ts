import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login-medico',
  templateUrl: './login-medico.component.html',
  styleUrls: ['./login-medico.component.css']
})
export class LoginMedicoComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      crm: new FormControl("", [Validators.required, Validators.minLength(1)]),
      senha: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  login(): void {
    this.authService.loginMedico(this.loginForm.value.crm, this.loginForm.value.senha).subscribe(
      (msg) => {
        if (msg.userId) {
          console.log('autenticado')
          localStorage.setItem("userId", JSON.stringify(msg.userId))
          this.router.navigate(["telaMedico"]);
        } else {
          console.log('nao autenticado')
        }
      }
    );
  }

}
