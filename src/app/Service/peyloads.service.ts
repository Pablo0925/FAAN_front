import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Fundacion } from '../Models/fundacion';
import { Observable } from 'rxjs';
import { environment } from '../environment/enviroment';
import { PeyloadNumeroAdopcionRaza } from '../Payloads/peyloadNumeroAdopcionRaza';
import { PeyloadNumeroAdopcionFecha } from '../Payloads/peyloadNumeroAdopcionFecha';


@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllPeyloadNumeroAdopcionRaza(): Observable<PeyloadNumeroAdopcionRaza[]>{
    return this.http.get<PeyloadNumeroAdopcionRaza[]>(environment.apiuri + `/animal/lista/PeyloadNumeroAdopcionRaza`);
  }

  public getAllPeyloadNumeroAdopcionFecha(): Observable<PeyloadNumeroAdopcionFecha[]>{
    return this.http.get<PeyloadNumeroAdopcionFecha[]>(environment.apiuri + `/animal/lista/PeyloadNumeroAdopcionFecha`);
  }

}