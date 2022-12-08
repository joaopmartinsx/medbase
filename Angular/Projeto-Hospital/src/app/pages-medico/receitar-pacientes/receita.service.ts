import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { receita } from "./receita";
import { catchError, first, Observable, tap } from "rxjs";
import { ErrorHandlerService } from '../../services/error/error-handler.service';
import { User } from "src/app/models/user/User";

@Injectable({
    providedIn: 'root'
})

export class receitaService {
    private readonly API = 'http://localhost:5000/auth/receitas'
    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
    constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService,) {
    }
    receita(user: Pick<receita, "id">): Observable<receita> {
        return this.http.post<receita>(`${this.API}`, user, this.httpOptions).pipe(
            first(),
            catchError(this.errorHandlerService.handleError<receita>("receita"))
        )
    }
}