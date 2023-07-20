import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { TipoEnfermedad } from '../Models/tipoEnfermedad';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TipoEnfermedadService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllTipoEnfermedad(page:number,size:number,sort:string): Observable<TipoEnfermedad[]> {
    return this.http.get<TipoEnfermedad[]>(environment.apiuri + '/tipoenfermedad/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaTipoEnfermedad():Observable<TipoEnfermedad[]>{
    return this.http.get<TipoEnfermedad[]>(environment.apiuri+'/tipoenfermedad/list');
  }

  public getTipoEnfermedadById(idTipoEnfermedad: number):Observable<TipoEnfermedad>{
    return this.http.get<TipoEnfermedad>(environment.apiuri+'/tipoenfermedad/findOne/'+idTipoEnfermedad);
  }

  public updateTipoEnfermedad(idTipoEnfermedad:number, tipoenfermedad: TipoEnfermedad):Observable<TipoEnfermedad>{
    return this.http.put<TipoEnfermedad>(environment.apiuri+'/tipoenfermedad/update/'+idTipoEnfermedad, tipoenfermedad);
  }

  public saveTipoEnfermedad(tipoenfermedad: TipoEnfermedad):Observable<TipoEnfermedad>{
    return this.http.post<TipoEnfermedad>(environment.apiuri+'/tipoenfermedad/save', tipoenfermedad);
  }

}
