import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Medico } from '../models/medico/Medico';
@Injectable({
    providedIn: 'root'
})

export class Medicoservice {
    private readonly API = 'http://localhost:4000/auth/medicos'
    constructor(private http: HttpClient) {
    }

    list(id: number) {
        return this.http.get<Medico[]>(`${this.API}/${id}`)
            .pipe(
                (res) => res,
                (err) => err
            );
    }

}