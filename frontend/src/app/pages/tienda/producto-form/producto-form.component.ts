import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../../pages.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {
  
  loading: boolean = false;
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.crearFormulario();
  }

  get notValidNombre(): boolean {
    return this.productoForm.get("nombre").touched && this.productoForm.get("nombre").invalid;
  }
  get notValidPrecio(): boolean {
    return this.productoForm.get("precio").touched && this.productoForm.get("precio").invalid;
  }
  get notValidDescripcion(): boolean {
    return this.productoForm.get("descripcion").touched && this.productoForm.get("descripcion").invalid;
  }
  get notValidCantidad(): boolean {
    return this.productoForm.get("cantidad").touched && this.productoForm.get("cantidad").invalid;
  }
  get notValidImagen(): boolean {
    return this.productoForm.get("imagen").touched && this.productoForm.get("imagen").invalid;
  }

  crearFormulario(): void {
    this.loading = true;
    this.productoForm = this.fb.group({
      nombre: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      cantidad: [null, [Validators.required]],
      imagen: [null, [Validators.required]]
    });
    this.loading = false;
  }

  crearProducto(): void {
    if (this.productoForm.invalid) {
      return;
    }
    this.productoForm.disable();
    const productoBody = {
      nombre: this.productoForm.get("nombre").value,
      precio: this.productoForm.get("precio").value,
      descripcion: this.productoForm.get("descripcion").value,
      cantidad: this.productoForm.get("cantidad").value,
      imagen: this.productoForm.get("imagen").value
    };
    this.pagesService.crearProducto(productoBody).subscribe(resp => {
      console.log(resp);
      this.router.navigate(["tienda"]);
    }, err => {
      console.log(err);
    });
  }

  atras(): void {
    this.location.back();
  }
}
