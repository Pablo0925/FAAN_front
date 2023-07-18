import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { DetalleAdopcion } from '../Models/detalleEncabezado';

import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class DetalleEncabezadoService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaDetalleAdopcion ():Observable<DetalleAdopcion []>{
    return this.http.get<DetalleAdopcion []>(environment.apiuri+'/detalleadopcion/list', { headers: this.storageService.returnToken()});
  }

  public getDetalleAdopcionById(idAdopcion: number):Observable<DetalleAdopcion >{
    return this.http.get<DetalleAdopcion >(environment.apiuri+'/detalleadopcion/findOne/'+idAdopcion, { headers: this.storageService.returnToken()});
  }

  public updateDetalleAdopcion (idAdopcion:number, DetalleAdopcion : DetalleAdopcion ):Observable<DetalleAdopcion >{
    return this.http.put<DetalleAdopcion >(environment.apiuri+'/detalleadopcion/update/'+idAdopcion, DetalleAdopcion , { headers: this.storageService.returnToken()});
  }

  public saveDetalleAdopcion (detalleAdopcion : DetalleAdopcion ):Observable<DetalleAdopcion >{
    return this.http.post<DetalleAdopcion >(environment.apiuriPublic+'/detalleadopcion/save', detalleAdopcion, { headers: this.storageService.returnToken()});
  }

}