import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { PagesService } from '../pages.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmActionComponent } from 'src/app/modals/confirm-action/confirm-action.component';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss']
})
export class TrabajadorComponent implements OnInit{
  
  loading: boolean = false;
  trabajador: any = [];
  resenas: any[] = [];
  showComentarioInput: boolean = false;

  nuevoComentario: string = "";
  calification: number = 0;
  idAtencion: number = null;

  constructor(
    public readonly authService: AuthService,
    private readonly pagesService: PagesService,
    private location: Location,
    private readonly activatedRoute: ActivatedRoute,
    private readonly modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(qp => {
      if (qp['idAtencion']) {
        this.idAtencion = qp['idAtencion'];
      }
      this.getTrabajador();
    })
  }

  getTrabajador(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.pagesService.getUsuario(params['idTrabajador']).subscribe(resp => {
        console.log(resp);
        this.trabajador = resp.usuario;
        // Obtener reseñas del trabajador
        this.pagesService.getResenasDeTrabajador(this.trabajador.id_usuario).subscribe(respResena => {
          console.log(respResena);
          this.resenas = respResena;
          this.loading = false;
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
    });
  }

  publicarComentario(): void {
    if (!this.idAtencion) {
      return;
    }
    if (this.nuevoComentario.length === 0) {
      return;
    }
    if (this.calification > 5 || this.calification < 0) {
      return;
    }
    const comentarioBody = {
      resena: this.nuevoComentario,
      calificacion: this.calification,
      id_atencion: this.idAtencion
    };
    this.pagesService.publicarResenaDeTrabajador(comentarioBody).subscribe(resp => {
      this.nuevoComentario = "";
      this.calification = 0;
      this.showComentarioInput = false;
      this.getTrabajador();
    }, err => {
      console.log(err);
    });
  }
  
  eliminarResena(resena: any): void {
    const modal = this.modalService.open(ConfirmActionComponent);
    modal.componentInstance.title = "Eliminar Reseña";
    modal.componentInstance.description = "¿Esás seguro que quieres eliminar el comentario actual?";
    modal.result.then(result => {
      this.pagesService.eliminarResenaAtencion(resena.id_resena).subscribe(resp => {
        console.log(resp);
        this.getTrabajador();
      }, err => {
        console.log(err);
      });
    }, dismiss => {});
  }

  atras(): void {
    this.location.back();
  }

}
