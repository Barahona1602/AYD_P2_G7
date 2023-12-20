import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum RequestMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private serverUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  private request(method: RequestMethod, url: string, body?: any, params?: any): Observable<any> {
    const requestUrl = `${this.serverUrl}/${url}`;
    let requestObservable: Observable<any>;
    switch (method) {
      case RequestMethod.GET:
      requestObservable = this.httpClient.get(requestUrl, { params });
      break;
      case RequestMethod.POST:
      requestObservable = this.httpClient.post(requestUrl, body, { params });  
      break;
      case RequestMethod.PUT:
      requestObservable = this.httpClient.put(requestUrl, body, { params });  
      break;
      case RequestMethod.PATCH:
      requestObservable = this.httpClient.patch(requestUrl, body, { params });  
      break;
      case RequestMethod.DELETE:
      requestObservable = this.httpClient.delete(requestUrl, { params });  
      break;
    }
    return requestObservable;
  }

  crearMascota(mascotaBody: any): Observable<any> {
    return this.request(RequestMethod.POST, "mascota", mascotaBody);
  }

  getMascotas(idUsuario: string): Observable<any> {
    return this.request(RequestMethod.GET, `mascota/usuario/${idUsuario}`);
  }
  getMascota(idMascota: string): Observable<any> {
    return this.request(RequestMethod.GET, `mascota/${idMascota}`);
  }

  hospedarMascota(hospedajeBody: any): Observable<any> {
    return this.request(RequestMethod.POST, "hospedarMascota", hospedajeBody);
  }

  getConteoTrabajador(idTrabajador: string): Observable<any> {
    return this.request(RequestMethod.GET, `atencionMascotaConteo/${idTrabajador}`);
  }
  getMascotasHospedadas(): Observable<any> {
    return this.request(RequestMethod.GET, "mascotasHospedadas");
  }
  atenderMascota(idAtencion: string, idUsuario: string): Observable<any> {
    return this.request(RequestMethod.PUT, `atencionMascotas/${idAtencion}/${idUsuario}`);
  }
  getMascotasEnAtencion(idUsuario: string): Observable<any> {
    return this.request(RequestMethod.GET, `atencionMascota/${idUsuario}`);
  }

  getUsuario(idUsuario: string): Observable<any> {
    return this.request(RequestMethod.GET, `usuario/${idUsuario}`);
  }
}