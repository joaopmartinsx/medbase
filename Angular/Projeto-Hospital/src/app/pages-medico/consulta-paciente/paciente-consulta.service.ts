import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, first, Observable, tap } from "rxjs";
import { ConsultaPaciente } from "./consulta-paciente";
import { Router } from '@angular/router';
import { ErrorHandlerService } from "src/app/services/error/error-handler.service";


@Injectable({
    providedIn: 'root'
})

export class PacienteService {
    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
    userId!: Pick<ConsultaPaciente, "id">
    private readonly API = 'http://localhost:8000/auth/sintoma/'
    constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router) {
    }
    pacienteConsulta(id: number) {
        return this.http.get<ConsultaPaciente>(`${this.API}/${id}`).pipe(
            (res) => res,
            (err) => err
        )
    }
}