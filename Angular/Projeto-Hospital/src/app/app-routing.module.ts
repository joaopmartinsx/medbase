import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AreaMedicaComponent } from './area-medica/area-medica.component';
import { MainBodyComponent } from './main-body/main-body.component';


const routes: Routes = [
  {
    path: '',
    component: MainBodyComponent
  },
  {
    path: 'area-medica',
    component: AreaMedicaComponent
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
