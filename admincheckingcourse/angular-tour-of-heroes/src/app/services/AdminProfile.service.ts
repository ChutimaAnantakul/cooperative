import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { Admin } from "../models/Admin";

@Injectable({
    providedIn: "root",
})
export class SumplanService {
    private url = "http://localhost:3000/Admin";

    httpOptions: { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(
        private errorHandlerService: ErrorHandlerService,
        private http: HttpClient
    ) { }

    fetchAll(): Observable<Admin[]> {
        return this.http
            .get<Admin[]>(this.url, { responseType: "json" })
            .pipe(
                tap((_) => console.log("fetched Admin")),
                catchError(
                    this.errorHandlerService.handleError<Admin[]>("fetchAll", [])
                )
            );
    }

    // post(studyplan_id: Partial<Sumplan>): Observable<any> {
    //     return this.http
    //         .post<Partial<Sumplan>>(this.url, studyplan_id, this.httpOptions)
    //         .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
    // }

    // getList(student_id: number | string) {
    //   return student_id.filter(
    //     function (list, i) {
    //       return list.student_id == student_id ? list : null;
    //     }
    //   );
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
