import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AreaMedicaComponent } from './area-medica/area-medica.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { LoginService } from './services/login/login.service';
import { SignupComponent } from './signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInput, MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ProntoAtendimentoComponent } from './pages/pronto-atendimento/pronto-atendimento.component';
import { SuporteTecnicoComponent } from './pages/suporte-tecnico/suporte-tecnico.component';
import { RegisterMedicoComponent } from './register-medico/register-medico.component';
import { PaginaMedicoComponent } from './pagina-medico/pagina-medico.component';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { ConsultaPacienteComponent } from './pages-medico/consulta-paciente/consulta-paciente.component';
import { ReceitarPacientesComponent } from './pages-medico/receitar-pacientes/receitar-pacientes.component';
import { VideoPacienteComponent } from './pages-medico/video-paciente/video-paciente.component';
import { ListaPacienteComponent } from './pages-medico/lista-paciente/lista-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    HeaderComponent,
    FooterComponent,
    AreaMedicaComponent,
    PaginaUsuarioComponent,
    SignupComponent,
    PaginaUsuarioComponent,
    HomeComponent,
    ConsultasComponent,
    ProntoAtendimentoComponent,
    SuporteTecnicoComponent,
    RegisterMedicoComponent,
    PaginaMedicoComponent,
    LoginMedicoComponent,
    ConsultaPacienteComponent,
    ReceitarPacientesComponent,
    VideoPacienteComponent,
    ListaPacienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatSelectModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
