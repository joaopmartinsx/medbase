import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-area-medica',
  templateUrl: './area-medica.component.html',
  styleUrls: ['./area-medica.component.css'],
})



export class AreaMedicaComponent implements OnInit {
  loginForm!: FormGroup;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      cpf: new FormControl("", [Validators.required, Validators.minLength(11)]),
      senha: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

   login(): void {
   this.authService.login(this.loginForm.value.cpf,this.loginForm.value.senha).subscribe();
  }
}

