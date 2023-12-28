import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { PagesService } from '../pages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResenaModalComponent } from 'src/app/modals/resena-modal/resena-modal.component';
import { ConfirmActionComponent } from 'src/app/modals/confirm-action/confirm-action.component';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss']
})
export class ResenasComponent implements OnInit {
  
  loading: boolean = false;
  resenas: any[] = [];


  constructor(
    public authService: AuthService,
    private pagesService: PagesService,
    private modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    this.getResenas(); 
  }

  getResenas(): void {
    this.loading = true;
    this.pagesService.getResenasDeHotel().subscribe(resp => {
      console.log(resp);
      this.resenas = resp;
      this.loading = false;
    }, err => {
      console.log(err);
    })
  }

  crearResena(): void {
    const modal = this.modalService.open(ResenaModalComponent);
    modal.result.then(result => {
      console.log(result);
      const resenaBody = {
        resena: result.resena,
        calificacion: result.calificacion,
        id_usuario: this.authService.user['id_usuario']
      };
      this.pagesService.crearResenaDeHotel(resenaBody).subscribe(resp => {
        console.log(resp);
        this.getResenas();
      }, err => {
        console.log(err);
      });
    }, dismiss => {});
  }

  eliminarResena(resena: any): void {
    const modal = this.modalService.open(ConfirmActionComponent);
    modal.componentInstance.title = "Eliminar Reseña";
    modal.componentInstance.description = "¿Estás seguro que quieres eliminar tu reseña?";
    modal.result.then(result => {
      // console.log(result);
      this.pagesService.eliminarResenaHotel(resena.id_resena_hotel).subscribe(resp => {
        console.log(resp);
        this.getResenas();
      }, err => {
        console.log(err);
      });
    }, dismiss => {})
  }

}
