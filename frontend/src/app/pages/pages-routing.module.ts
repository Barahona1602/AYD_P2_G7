import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MascotasComponent } from "./mascotas/mascotas.component";
import { CrearMascotaComponent } from "./mascotas/crear-mascota/crear-mascota.component";
import { EditarMascotaComponent } from "./mascotas/editar-mascota/editar-mascota.component";
import { MascotaComponent } from "./mascotas/mascota/mascota.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "mascotas", component: MascotasComponent },
  { path: "mascotas/nueva", component: CrearMascotaComponent },
  { path: "mascotas/editar/:id", component: EditarMascotaComponent },
  { path: "mascotas/:id", component: MascotaComponent },
  { path: "**", redirectTo: "auth/login" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }