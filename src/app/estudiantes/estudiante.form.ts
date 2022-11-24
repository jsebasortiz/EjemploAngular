import {Component, OnInit} from "@angular/core";
import {Estudiante} from "./estudiante";
import {EstudianteService} from "./estudiante.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-form',
  templateUrl: './estudiante.form.html'
})
export class EstudianteForm implements OnInit {
  public estudiante: Estudiante = new Estudiante();
  public titulo: string = "Formulario de edicion de estudiante";

  constructor(private estudianteService: EstudianteService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cargarEstudiante()

  }

  cargarEstudiante(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if (id) {
          this.estudianteService.getEstudiante(id).subscribe(
            estudiante => this.estudiante = estudiante
          );
        }
      }
    );
  }

  update(): void {
    this.estudianteService.update(this.estudiante).subscribe(
      estudiante => {
        this.router.navigate(['/estudiantes']);
        // TODO: Agregar el codigo al SweetAlert
        Swal.fire({
          position: 'center',
          icon: 'success',
          html: `Tweet del estudiante actualizado:<b style="size: 7">${estudiante.nombre}</b>`,
          title: 'El tweet ha sido actualizadO',
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 3000
        })
      }
    );
  }

  create(): void {
    this.estudianteService.create(this.estudiante).subscribe(
      estudiante => {
        this.router.navigate(['/estudiantes'])
        // TODO: Agregar el codigo al SweetAler
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El tweet ha sido creado',
            html: ` Tweet de estudiante creado:<b style="size: A3">${estudiante.nombre}</b>`,
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 4500
          }
        );
      }
    )
  }
}
