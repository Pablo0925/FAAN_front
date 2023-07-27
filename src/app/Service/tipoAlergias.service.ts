import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/enviroment';
import { TipoAlergias } from '../Models/tipoAlergias';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TipoAlergiasService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  
  public getAllTipoAlergias(page:number,size:number,sort:string): Observable<TipoAlergias[]> {
    return this.http.get<TipoAlergias[]>(environment.apiuri + '/tipoalergias/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }
  

  public getListaTipoAlergias():Observable<TipoAlergias[]>{
    return this.http.get<TipoAlergias[]>(environment.apiuri+'/tipoalergias/list');
  }

  public getTipoAlergiasById(idTipoAlergia: number):Observable<TipoAlergias>{
    return this.http.get<TipoAlergias>(environment.apiuri+'/tipoalergias/findOne/'+idTipoAlergia);
  }

  public updateTipoAlergias(idTipoAlergia:number, tipoalergias: TipoAlergias):Observable<TipoAlergias>{
    return this.http.put<TipoAlergias>(environment.apiuri+'/tipoalergias/update/'+idTipoAlergia, tipoalergias);
  }

  public saveTipoAlergias(tipoalergias: TipoAlergias):Observable<TipoAlergias>{
    return this.http.post<TipoAlergias>(environment.apiuri+'/tipoalergias/save', tipoalergias);
  }

}
