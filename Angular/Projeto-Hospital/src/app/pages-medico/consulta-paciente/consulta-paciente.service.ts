import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { ConsultaPaciente } from "./consulta-paciente";

@Injectable({
    providedIn: 'root'
})

export class consultaService {
    private readonly API = 'http://localhost:8000/auth/sintomas'
    constructor(private http: HttpClient) {
    }
    paciente() {
        return this.http.get<ConsultaPaciente[]>(`${this.API}`).pipe(
            tap(console.log)
        )
    }
}