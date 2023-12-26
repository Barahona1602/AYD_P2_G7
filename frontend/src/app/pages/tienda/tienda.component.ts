import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  
  loading: boolean = false;
  productos: any[] = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private pagesService: PagesService
  ) {}
  
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.loading = true;
    this.pagesService.getProductos().subscribe(resp => {
      console.log(resp);
      this.productos = resp.productos;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }

  crearProducto(): void {
    this.router.navigate(["tienda", "nuevo"]);
  }
}
