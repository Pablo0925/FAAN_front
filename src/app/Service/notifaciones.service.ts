import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environment/enviroment';
import { Observable } from 'rxjs';
import { Notificacion } from '../Models/notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotifacionesService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public saveNotificacion(notifiacion: Notificacion): Observable<Notificacion> {
    return this.http.post<Notificacion>(environment.apiuri + '/notificaciones/save', notifiacion);
  }

}
