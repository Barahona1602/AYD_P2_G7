import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit {
  
  loading: boolean = false;
  mascotas: any[] = [];

  constructor(
    private pagesService: PagesService,
    public authService: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas(): void {
    this.loading = true;
    this.pagesService.getMascotas(this.authService.user["id_usuario"]).subscribe(resp => {
      console.log(resp);
      this.mascotas = resp.mascotas;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }

  crearMascota(): void {
    this.router.navigate(["mascotas", "nueva"]);
  }
}
