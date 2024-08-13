import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  public role = "";
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'login', data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }

  logout(): Observable<any> {
    return this.http.get<any>(apiUrl + 'signout')
      .pipe(
        tap(_ => this.isLoggedIn = false),
        catchError(this.handleError('logout', []))
      );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }
  update(data: any): Observable<any> {
    return this.http.put<any>(apiUrl + 'update', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }
  getThisUser():Observable<any> {
    return this.http.get<any>(apiUrl + 'thisUser')
      .pipe(
        tap(_ => this.log('user')),
        catchError(this.handleError('user', []))
      );
  }

  getUsers():Observable<any> {
    return this.http.get<any>(apiUrl + 'users')
      .pipe(
        tap(_ => this.log('user')),
        catchError(this.handleError('user', []))
      );
  }


  isAdmin():Observable<any> {
    return this.http.get<any>(apiUrl + 'hasAdmin')
      .pipe(
        tap(_ => this.log('user')),
        catchError(this.handleError('user', []))
      );
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
  delete (email: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}${email}`);
  }
}
