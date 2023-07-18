import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { EncabezadoAdopcion } from '../Models/encabezadoAdopcion';

import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class EncabezadoAdopcionService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaEncabezadoAdopcion ():Observable<EncabezadoAdopcion []>{
    return this.http.get<EncabezadoAdopcion []>(environment.apiuri+'/encabezadoadopcion/list', { headers: this.storageService.returnToken()});
  }

  public getEncabezadoAdopcionById(idEncabezadoAdopcion: number):Observable<EncabezadoAdopcion >{
    return this.http.get<EncabezadoAdopcion >(environment.apiuri+'/encabezadoadopcion/findOne/'+idEncabezadoAdopcion, { headers: this.storageService.returnToken()});
  }

  public updateEncabezadoAdopcion (idEncabezadoAdopcion:number, EncabezadoAdopcion : EncabezadoAdopcion ):Observable<EncabezadoAdopcion >{
    return this.http.put<EncabezadoAdopcion >(environment.apiuri+'/encabezadoadopcion/update/'+idEncabezadoAdopcion, EncabezadoAdopcion , { headers: this.storageService.returnToken()});
  }

  public saveEncabezadoAdopcion (detalleAdopcion : EncabezadoAdopcion ):Observable<EncabezadoAdopcion >{
    return this.http.post<EncabezadoAdopcion >(environment.apiuriPublic+'/encabezadoadopcion/save', detalleAdopcion, { headers: this.storageService.returnToken()});
  }

}