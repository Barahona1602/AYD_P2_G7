import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MascotasComponent } from "./mascotas/mascotas.component";
import { CrearMascotaComponent } from "./mascotas/crear-mascota/crear-mascota.component";
import { EditarMascotaComponent } from "./mascotas/editar-mascota/editar-mascota.component";
import { MascotaComponent } from "./mascotas/mascota/mascota.component";
import { HospedajeComponent } from "./mascotas/hospedaje/hospedaje.component";
import { ProfileComponent } from "./profile/profile.component";
import { TrabajadorComponent } from "./trabajador/trabajador.component";
import { ResenasComponent } from "./resenas/resenas.component";
import { TiendaComponent } from "./tienda/tienda.component";
import { ProductoFormComponent } from "./tienda/producto-form/producto-form.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "mascotas", component: MascotasComponent },
  { path: "mascotas/nueva", component: CrearMascotaComponent },
  { path: "mascotas/editar/:id", component: EditarMascotaComponent },
  { path: "mascotas/:id", component: MascotaComponent },
  { path: "hospedaje", component: HospedajeComponent },
  { path: "perfil", component: ProfileComponent },
  { path: "trabajador/:idTrabajador", component: TrabajadorComponent },
  { path: "resenas", component: ResenasComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "tienda/nuevo", component: ProductoFormComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "auth/login" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }