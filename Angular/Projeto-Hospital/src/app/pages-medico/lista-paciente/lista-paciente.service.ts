import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { ConsultaPaciente } from "../consulta-paciente/consulta-paciente";

@Injectable({
    providedIn: 'root'
})

export class listagemService {
    private readonly API = 'http://localhost:8000/auth/sintoma'
    constructor(private http: HttpClient) {
    }
    paciente(id: number) {
        return this.http.get<ConsultaPaciente[]>(`${this.API}/${id}`).pipe(
            tap(console.log)
        )
    }
}