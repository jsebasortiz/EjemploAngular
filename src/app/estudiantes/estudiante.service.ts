import {Injectable} from '@angular/core';
import {Estudiante} from "./estudiante";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  update(estudiante: Estudiante): Observable<Estudiante> {
    return this.httpClient.put<Estudiante>(`${this.urlEndPoint}/${estudiante.id}`, estudiante,
      {headers: this.httpHeader});

  }

  create(estudiante: Estudiante): Observable<Estudiante> {
    return this.httpClient.post<Estudiante>(this.urlEndPoint, estudiante, {headers: this.httpHeader});
  }


  delete(id: number): Observable<Estudiante> {
    return this.httpClient.delete<Estudiante>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeader});
  }


  private urlEndPoint: string = "Http://localhost:8080/estudianteservice/estudiantes";

  constructor(private httpClient: HttpClient) {
  }

  getEstudiantes(): Observable<Estudiante[]> {
    //return of(ESTUDIANTES);
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Estudiante[])
    );
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return this.httpClient.get<Estudiante>(`${this.urlEndPoint}/${id}`)

  }
}
