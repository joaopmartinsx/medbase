import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Atendimento } from "./pronto-atendimento";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProntoAtendimentoService{
    private readonly API = 'http://localhost:4000/auth/medico'
    constructor(private http: HttpClient){
    }
    list() {
        return this.http.get<Atendimento[]>(`${this.API}`).pipe(
            tap(console.log)
        )
    }
}