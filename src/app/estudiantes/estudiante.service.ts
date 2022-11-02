import { Injectable } from '@angular/core';
import {Estudiante} from "./estudiante";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private urlEndPoint: string ="Http://localhost:8080/estudianteservice/estudiantes";

  constructor(private httpClient: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    //return of(ESTUDIANTES);
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Estudiante[])
    );
  }
  getEstudiante(id: number): Observable<Estudiante>{
    return this.httpClient.get<Estudiante>(`${this.urlEndPoint}/${id}`)

  }
}
