import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesService } from './pages.service';
import { ProfileComponent } from './profile/profile.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { MascotaFormComponent } from './mascotas/mascota-form/mascota-form.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascotas/mascota/mascota.component';
import { HospedajeComponent } from './mascotas/hospedaje/hospedaje.component';
import { AtencionComponent } from './atencion/atencion.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { ResenasComponent } from './resenas/resenas.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoFormComponent } from './tienda/producto-form/producto-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    MascotaFormComponent,
    MascotasComponent,
    MascotaComponent,
    HospedajeComponent,
    AtencionComponent,
    TrabajadorComponent,
    ResenasComponent,
    TiendaComponent,
    ProductoFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PagesService]
})
export class PagesModule { }
