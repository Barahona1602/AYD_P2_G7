import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { PagesService } from '../../pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.scss']
})
export class MascotaFormComponent implements OnInit {
  
  @Input() isNew: boolean;
  mascota: any;
  loading: boolean = false;
  mascotaForm: FormGroup;
  showAlert: boolean = false;
  alertMessage = "";
  lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem facere quod eligendi veritatis, fugit ratione ducimus facilis aspernatur illum eveniet molestias cumque dolorum vel, nesciunt esse voluptates magni incidunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem facere quod eligendi veritatis, fugit ratione ducimus facilis aspernatur illum eveniet molestias cumque dolorum vel, nesciunt esse voluptates magni incidunt!";

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService,
    private pagesService: PagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isNew) {
      this.crearFormulario();
    }
  }

  get notValidNombre(): boolean {
    return this.mascotaForm.get("nombre").touched && this.mascotaForm.get("nombre").invalid;
  }
  get notValidEdad(): boolean {
    return this.mascotaForm.get("edad").touched && this.mascotaForm.get("edad").invalid;
  }
  get notValidEspecie(): boolean {
    return this.mascotaForm.get("especie").touched && this.mascotaForm.get("especie").invalid;
  }
  get notValidRaza(): boolean {
    return this.mascotaForm.get("raza").touched && this.mascotaForm.get("raza").invalid;
  }
  get notValidComprtamiento(): boolean {
    return this.mascotaForm.get("comportamiento").touched && this.mascotaForm.get("comportamiento").invalid;
  }
  get notValidContactoVet(): boolean {
    return this.mascotaForm.get("contactoVet").touched && this.mascotaForm.get("contactoVet").invalid;
  }
  get notValidComentario(): boolean {
    return this.mascotaForm.get("comentario").touched && this.mascotaForm.get("comentario").invalid;
  }

  crearFormulario(): void {
    this.loading = true;
    this.mascotaForm = this.fb.group({
      nombre: [null, [Validators.required]],
      edad: [null, [Validators.required]],
      especie: [null, [Validators.required]],
      raza: [null, [Validators.required]],
      comportamiento: [null, [Validators.required]],
      contactoVet: [null, [Validators.required]],
      comentario: [this.lorem, [Validators.required]],
    });
    this.loading = false;
  }

  guardarMascota(): void {
    if (this.mascotaForm.invalid) {
      return;
    }
    this.mascotaForm.disable();
    const mascotaBody = {
      nombre_mascota: this.mascotaForm.get("nombre").value,
      edad: this.mascotaForm.get("edad").value,
      especie: this.mascotaForm.get("especie").value,
      raza: this.mascotaForm.get("raza").value,
      comportamiento: this.mascotaForm.get("comportamiento").value,
      contacto_vet: this.mascotaForm.get("contactoVet").value,
      comentario: this.mascotaForm.get("comentario").value,
      id_usuario: this.authService.user["id_usuario"]
    };

    if (this.isNew) {
      this.pagesService.crearMascota(mascotaBody).subscribe(resp => {
        console.log(resp);
        this.router.navigate(["mascotas"]);
      }, err => {
        console.log(err);
        this.alertMessage = err.error.message ?? "Algo salio mal.";
        this.showAlert = true;
        this.mascotaForm.enable();
      })
    }
  }

  atras(): void {
    this.location.back();
  }

}
