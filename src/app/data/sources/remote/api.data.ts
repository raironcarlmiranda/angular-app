import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Result } from "../../../core/model/result";

@Injectable({
  providedIn: 'root'
})
export class ApiData {

  constructor(private http: HttpClient) {}

  post<T>(
    url: string, 
    body: any, 
    options?: {
      headers?: HttpHeaders | { [header: string]: string | string[] };
      context?: HttpContext;
      params?: { [param: string]: string | number | boolean };
    }
  ): Observable<Result<T>> {
    return this.http.post<Result<T>>(url, body, options).pipe(
      map((response: any) => new Result<T>(response)),
      catchError(
         this.errorHandler<T>
      ));
  }

  get<T>(
    url: string,
    options?: {
      headers?: HttpHeaders | { [header: string]: string | string[] };
      context?: HttpContext;
      params?: { [param: string]: string | number | boolean };
    }
  ): Observable<Result<T>> {
    return this.http.get<Result<T>>(url, options).pipe(
      map((response: any) => new Result<T>(response)),
      catchError(
         this.errorHandler<T>
      ));
  }

  delete<T>(
    url: string,
    options?: {
      headers?: HttpHeaders | { [header: string]: string | string[] };
      context?: HttpContext;
      params?: { [param: string]: string | number | boolean };
    }
  ): Observable<Result<T>> {
    return this.http.delete<Result<T>>(url, options).pipe(
      map((response: any) => new Result<T>(response)),
      catchError(
         this.errorHandler<T>
      ));
  }

  update<T>(
    url: string, 
    body: any,
    options?: {
      headers?: HttpHeaders | { [header: string]: string | string[] };
      context?: HttpContext;
      params?: { [param: string]: string | number | boolean };
    }
  ): Observable<Result<T>> {
    return this.http.put<Result<T>>(url, body, options).pipe(
      map((response: any) => new Result<T>(response)),
      catchError(
         this.errorHandler<T>
      ));
  }

  //function set default options for token

  private errorHandler<T>(httpErr: HttpErrorResponse): Observable<Result<T>> {
    const result: Result<T> = new Result<T>({
      status: httpErr.status,
      success: httpErr.ok,
      message: httpErr.error.message ?? httpErr.message,
    });

    return of(result);
  }
}
