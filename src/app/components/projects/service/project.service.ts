import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Projet} from "../../../utils/models/models";

const apiUrl = 'http://localhost:8080/api/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projet[]> {
    return this.http.get<Projet[]>(apiUrl+"/projects")
      .pipe(
        tap(_ => this.log('fetched Projets')),
        catchError(this.handleError('getProjets', []))
      );
  }

  createProject(project: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${apiUrl}/create`, project);
  }

  updateProject(project: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${apiUrl}/${project.id}`, project);
  }

  deleteProject(id: number): Observable<void> {
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
