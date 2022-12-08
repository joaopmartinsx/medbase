import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AreaMedicaComponent } from './area-medica/area-medica.component';
import { LoginMedicoComponent } from './login-medico/login-medico.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { ConsultaPacienteComponent } from './pages-medico/consulta-paciente/consulta-paciente.component';
import { ListaPacienteComponent } from './pages-medico/lista-paciente/lista-paciente.component';
import { ReceitarPacientesComponent } from './pages-medico/receitar-pacientes/receitar-pacientes.component';
import { VideoPacienteComponent } from './pages-medico/video-paciente/video-paciente.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { HomeComponent } from './pages/home/home.component';
import { ProntoAtendimentoComponent } from './pages/pronto-atendimento/pronto-atendimento.component';
import { SuporteTecnicoComponent } from './pages/suporte-tecnico/suporte-tecnico.component';
import { PaginaMedicoComponent } from './pagina-medico/pagina-medico.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { RegisterMedicoComponent } from './register-medico/register-medico.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: MainBodyComponent
  },
  {
    path: 'area-medica',
    component: AreaMedicaComponent
  },
  {
    path: 'medico',
    component: RegisterMedicoComponent
  },
  {
    path: 'loginMedico',
    component: LoginMedicoComponent
  },
  {
    path: 'telaMedico/ConsultaPaciente',
    component: ConsultaPacienteComponent
  },
  {
    path: 'telaMedico/ReceitaPaciente',
    component: ReceitarPacientesComponent
  },
  {
    path: 'telaMedico/videoPaciente',
    component: VideoPacienteComponent
  },
  {
    path: 'telaMedico/Paciente/:id',
    component: ListaPacienteComponent
  },
  {
    path: 'telaMedico',
    component: PaginaMedicoComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'usuario',
    component: PaginaUsuarioComponent,
  },
  {
    path: 'usuario/receitas',
    component: HomeComponent
  },
  {
    path: 'usuario/consulta',
    component: ConsultasComponent
  },
  {
    path: 'usuario/pronto-atendimento',
    component: ProntoAtendimentoComponent
  },
  {
    path: 'usuario/suporte-tecnico',
    component: SuporteTecnicoComponent
  },
  {
    path: '**',
    redirectTo: ""
  }
]




@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
