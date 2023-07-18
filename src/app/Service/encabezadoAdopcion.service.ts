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


  public getAllEncabezadoAdopcion(page:number,size:number,sort:string): Observable<EncabezadoAdopcion[]> {
    return this.http.get<EncabezadoAdopcion[]>(environment.apiuri + '/encabezadoadopcion/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }

  public getListaEncabezadoAdopcion ():Observable<EncabezadoAdopcion []>{
    return this.http.get<EncabezadoAdopcion []>(environment.apiuri+'/encabezadoadopcion/list');
  }

  public getEncabezadoAdopcionById(idEncabezadoAdopcion: number):Observable<EncabezadoAdopcion >{
    return this.http.get<EncabezadoAdopcion >(environment.apiuri+'/encabezadoadopcion/findOne/'+idEncabezadoAdopcion);
  }

  public updateEncabezadoAdopcion (idEncabezadoAdopcion:number, EncabezadoAdopcion : EncabezadoAdopcion ):Observable<EncabezadoAdopcion >{
    return this.http.put<EncabezadoAdopcion >(environment.apiuri+'/encabezadoadopcion/update/'+idEncabezadoAdopcion, EncabezadoAdopcion );
  }

  public saveEncabezadoAdopcion (detalleAdopcion : EncabezadoAdopcion ):Observable<EncabezadoAdopcion >{
    return this.http.post<EncabezadoAdopcion >(environment.apiuriPublic+'/encabezadoadopcion/save', detalleAdopcion);
  }

}