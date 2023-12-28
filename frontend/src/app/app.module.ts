import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmActionComponent } from './modals/confirm-action/confirm-action.component';
import { HospedarMascotaModalComponent } from './modals/hospedar-mascota-modal/hospedar-mascota-modal.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEstadoModalComponent } from './modals/actualizar-estado-modal/actualizar-estado-modal.component';
import { ResenaModalComponent } from './modals/resena-modal/resena-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfirmActionComponent,
    HospedarMascotaModalComponent,
    ActualizarEstadoModalComponent,
    ResenaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
