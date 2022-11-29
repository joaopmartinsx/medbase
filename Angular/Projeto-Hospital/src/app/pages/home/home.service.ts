import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Receita } from "./home";
import { tap } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class ReceitaService {
    private readonly API = 'http://localhost:5000/auth/receita'
    constructor(private http: HttpClient){
    }

    list() {
        return this.http.get<Receita[]>(`${this.API}`).pipe(
            tap(console.log)
        )
    }    
}