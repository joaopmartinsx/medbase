import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Consulta } from "./consulta";
import { catchError, first, Observable, tap } from "rxjs";
import { ErrorHandlerService } from '../../services/error/error-handler.service';

@Injectable({
    providedIn: 'root'
})

export class ConsultaService {
    private readonly API = 'http://localhost:8000/auth/sintoma'
    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
    constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService,) {
    }
    consulta(user: Pick<Consulta, "id">): Observable<Consulta> {
        return this.http.post<Consulta>(`${this.API}`, user, this.httpOptions).pipe(
            first(),
            catchError(this.errorHandlerService.handleError<Consulta>("consulta"))
        )
    }
}