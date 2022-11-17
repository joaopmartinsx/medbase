import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AreaMedicaComponent } from './area-medica/area-medica.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
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
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'usuario',
    component: PaginaUsuarioComponent
  },
  {
    path: '**',
    redirectTo: ""
  }
]


@NgModule({
 exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
