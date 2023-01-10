import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { Plan } from "../models/Plan";

@Injectable({
    providedIn: "root",
})
export class PlanService {
    private url = "http://localhost:3000/plan";

    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(
        private errorHandlerService: ErrorHandlerService,
        private http: HttpClient
    ) { }

    fetchAll(): Observable<Plan[]> {
        return this.http
            .get<Plan[]>(this.url, { responseType: "json" })
            .pipe(
                tap((_) => console.log("fetched plans")),
                catchError(
                    this.errorHandlerService.handleError<Plan[]>("fetchAll", [])
                )
            );
    }

    // post(item: Partial<Grocery>): Observable<any> {
    //   return this.http
    //     .post<Partial<Grocery>>(this.url, item, this.httpOptions)
    //     .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
    // }

    // update(grocery: Grocery): Observable<any> {
    //   return this.http
    //     .put<Grocery>(this.url, grocery, this.httpOptions)
    //     .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
    // }

    // delete(id: number): Observable<any> {
    //   const url = `http://localhost:3000/groceries/${id}`;

    //   return this.http
    //     .delete<Grocery>(url, this.httpOptions)
    //     .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
    // }
}
