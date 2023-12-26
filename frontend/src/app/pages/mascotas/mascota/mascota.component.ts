import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmActionComponent } from 'src/app/modals/confirm-action/confirm-action.component';
import { ActualizarEstadoModalComponent } from 'src/app/modals/actualizar-estado-modal/actualizar-estado-modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  
  loading: boolean = false;
  mascota: any;
  estaHospedado: boolean;
  trabajador: any;
  hayTrabajador: boolean;
  poderRecogerMascota: boolean;

  constructor(
    private pagesService: PagesService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getMascota();
  }


  getMascota() {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.pagesService.getMascota(params["id"]).subscribe(resp => {
        console.log(resp);
        this.mascota = resp.mascota;
        this.estaHospedado = this.mascota.id_atencion !== null && this.mascota.id_atencion !== undefined;
        const momentoDeRetorno = moment(this.mascota.fecha_devolucion);
        const ahorita = moment();
        this.poderRecogerMascota = ahorita >= momentoDeRetorno;
        if (this.mascota.id_trabajador) {
          this.pagesService.getUsuario(this.mascota.id_trabajador).subscribe(resp => {
            console.log(resp);
            this.trabajador = resp.usuario;
            this.hayTrabajador = true;
            this.loading = false;
          }, err => {
            console.log(err);
          });
        } else {
          this.hayTrabajador = false;
          this.loading = false;
        }
      }, err => {
        console.log(err);
      })
    })
  }

  atras(): void {
    this.location.back();
  }

  recogerMascota(): void {
    const modal = this.modalService.open(ConfirmActionComponent);
    modal.componentInstance.title = "Recoger Mascota";
    modal.componentInstance.description = `¿Estas seguro que quieres recoger a ${this.mascota.nombre_mascota}?`;
    modal.result.then(result => {
      this.pagesService.actualizarEstadoMascota(this.mascota.id_atencion, { estado: 'Recogido' }).subscribe(resp => {
        console.log(resp);
        this.router.navigate(["trabajador", this.mascota.id_trabajador], { queryParams: { idAtencion: this.mascota.id_atencion } });
      }, err => {
        console.log(err);
      });
    }, dismiss => {});
  }

  actualizarEstado(): void {
    const modal = this.modalService.open(ActualizarEstadoModalComponent);
    modal.componentInstance.nombreMascota = this.mascota.nombre_mascota;
    modal.result.then(estado => {
      this.pagesService.actualizarEstadoMascota(this.mascota.id_atencion, { estado }).subscribe(resp => {
        console.log(resp);
        this.getMascota();
      }, err => {
        console.log(err);
      });
    }, dismiss => {});
  }

  verTrabajador(): void {
    this.router.navigate(["trabajador", this.mascota.id_trabajador], { queryParams: { idAtencion: this.mascota.id_atencion } })
  }
}
