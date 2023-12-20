import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmActionComponent } from 'src/app/modals/confirm-action/confirm-action.component';

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.scss']
})
export class HospedajeComponent implements OnInit {
  loading: boolean = false;
  mascotas: any[] = [];
  constructor(
    private pagesService: PagesService,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas(): void {
    this.loading = true;
    this.pagesService.getMascotasEnAtencion(this.authService.user["id_usuario"]).subscribe(resp => {
      console.log(resp);
      this.mascotas = resp.atencionesMascotas;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }

  retornarMascota(mascota: any): void {
    const modal = this.modalService.open(ConfirmActionComponent);
    modal.componentInstance.title = "Devolver Mascota";
    modal.componentInstance.description = `¿Estas seguro que quieres retornar a ${mascota.nombre_mascota} ahorita?`;
    modal.result.then(result => {
      
    }, dismiss => {})
  }
}
