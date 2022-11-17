import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AreaMedicaComponent } from './area-medica/area-medica.component';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { LoginService } from './services/login/login.service';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInput, MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import { NoopAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    HeaderComponent,
    FooterComponent,
    AreaMedicaComponent,
    PaginaUsuarioComponent,
    SignupComponent,
    PaginaUsuarioComponent
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
    MatToolbarModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
