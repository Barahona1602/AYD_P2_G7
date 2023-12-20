import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HospedarMascotaModalComponent } from 'src/app/modals/hospedar-mascota-modal/hospedar-mascota-modal.component';
import { ConfirmActionComponent } from 'src/app/modals/confirm-action/confirm-action.component';
import * as moment from 'moment';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit {
  
  loading: boolean = false;
  mascotas: any[] = [];
  isCliente: boolean;
  conteoTrabajador: number;

  constructor(
    private pagesService: PagesService,
    public authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    if (this.authService.user['rol'] === "Cliente") {
      this.isCliente = true;
    } else {
      this.isCliente = false;
    }
    this.getMascotas();
  }

  getMascotas(): void {
    this.loading = true;
    if (this.isCliente) {
      this.pagesService.getMascotas(this.authService.user["id_usuario"]).subscribe(resp => {
        console.log(resp);
        this.mascotas = resp.mascotas;
        this.loading = false;
      }, err => {
        console.log(err);
      });
    } else {
      this.pagesService.getConteoTrabajador(this.authService.user['id_usuario']).subscribe(conteoResp => {
        this.conteoTrabajador = conteoResp.atencionesMascotas[0].conteo;
        console.log(this.conteoTrabajador);
        this.pagesService.getMascotasHospedadas().subscribe(resp => {
          console.log(resp);
          this.mascotas = resp;
          this.loading = false;
        })
      }, err => {
        console.log(err);
      })
    }
  }

  hospedarMascota(mascota: any): void {
    const modal = this.modalService.open(HospedarMascotaModalComponent);
    modal.componentInstance.nombreMascota = mascota.nombre_mascota;
    modal.result.then(fechaRetorno => {
      const hospedajeBody = {
        fecha_devolucion: fechaRetorno,
        id_mascota: mascota.id_mascota
      };
      this.pagesService.hospedarMascota(hospedajeBody).subscribe(resp => {
        this.getMascotas();
      }, err => {
        console.log(err);
      })
    }, dismiss => {})
  }

  crearMascota(): void {
    this.router.navigate(["mascotas", "nueva"]);
  }

  atenderMascota(mascota: any): void {
    const modal = this.modalService.open(ConfirmActionComponent);
    modal.componentInstance.title = "Atender Mascota";
    modal.componentInstance.description = `¿Estas seguro que quieres atender a ${mascota.nombre_mascota} hasta ${moment(mascota.fecha_devolucion).format("DD/MM/YYYY")}?`;
    modal.result.then(result => {
      this.pagesService.atenderMascota(mascota.id_atencion, this.authService.user["id_usuario"]).subscribe(resp => {
        this.getMascotas();
      }, err => {
        console.log(err);
      });
    }, dismiss => {});
  }
}
