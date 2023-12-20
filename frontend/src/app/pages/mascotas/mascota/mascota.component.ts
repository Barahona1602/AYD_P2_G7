import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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

  constructor(
    private pagesService: PagesService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
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
        if (this.mascota.id_trabajador) {
          this.pagesService.getUsuario(this.mascota.id_trabajador).subscribe(resp => {
            console.log(resp);
            this.trabajador = resp.usuario;
            this.loading = false;
          }, err => {
            console.log(err);
          });
        } else {
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
}
