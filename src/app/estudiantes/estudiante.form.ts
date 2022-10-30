import {Component} from "@angular/core";
import {Estudiante} from "./estudiante";
import {EstudianteService} from "./estudiante.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './estudiante.form.html'
})
export class EstudianteForm {
  public estudiante: Estudiante = new Estudiante();
  public titulo: string = "Formulario de edicion de estudiante";

  constructor(public estudianteService: EstudianteService,
              private router: Router, activatedRoute: ActivatedRoute) {
  }
}
