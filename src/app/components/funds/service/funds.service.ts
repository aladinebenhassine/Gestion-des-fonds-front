import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Fonds} from "../../../utils/models/models";

const apiUrl = 'http://localhost:8080/api/fund';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(private http: HttpClient) { }

  getFonds(): Observable<Fonds[]> {
    return this.http.get<Fonds[]>(apiUrl+"/fonds")
      .pipe(
        tap(_ => this.log('fetched Fonds')),
        catchError(this.handleError('getFonds', []))
      );
  }

  createFund(fund: Fonds): Observable<Fonds> {
    return this.http.post<Fonds>(`${apiUrl}/create`, fund);
  }

  updateFund(fund: Fonds): Observable<Fonds> {
    return this.http.put<Fonds>(`${apiUrl}/${fund.id}`, fund);
  }

  deleteFund(id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
