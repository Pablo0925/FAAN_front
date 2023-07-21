import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { TipoTratamiento } from '../Models/tipoTratamiento';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TipoTratamientoService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllTipoTratamiento(page:number,size:number,sort:string): Observable<TipoTratamiento[]> {
    return this.http.get<TipoTratamiento[]>(environment.apiuri + '/tipoTratamiento/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaTipoTratamiento():Observable<TipoTratamiento[]>{
    return this.http.get<TipoTratamiento[]>(environment.apiuri+'/tipoTratamiento/list');
  }

  public getTipoTratamientoById(idTipoTratamiento: number):Observable<TipoTratamiento>{
    return this.http.get<TipoTratamiento>(environment.apiuri+'/tipoTratamiento/findOne/'+idTipoTratamiento);
  }

  public updateTipoTratamiento(idTipoTratamiento:number, tipoTratamiento: TipoTratamiento):Observable<TipoTratamiento>{
    return this.http.put<TipoTratamiento>(environment.apiuri+'/tipoTratamiento/update/'+idTipoTratamiento, tipoTratamiento);
  }

  public saveTipoTratamiento(tipoTratamiento: TipoTratamiento):Observable<TipoTratamiento>{
    return this.http.post<TipoTratamiento>(environment.apiuri+'/tipoTratamiento/save', tipoTratamiento);
  }

}
