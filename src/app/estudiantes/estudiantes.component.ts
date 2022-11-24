import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Estudiante} from "./estudiante";
import {EstudianteService} from "./estudiante.service";

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService) {
  }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe(
      estudiantes => this.estudiantes = estudiantes
    );

  }

  delete(estudiante: Estudiante): void {
    this.estudianteService.delete(estudiante.id).subscribe(
     response => this.estudiantes = this.estudiantes.filter(est=> est !== estudiante)
    );
  }
}
