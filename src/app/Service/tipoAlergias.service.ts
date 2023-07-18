import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { TipoAlergias } from '../Models/tipoAlergias';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TipoAlergiasService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaTipoAlergias():Observable<TipoAlergias[]>{
    return this.http.get<TipoAlergias[]>(environment.apiuri+'/tipoalergias/list', { headers: this.storageService.returnToken()});
  }

  public getTipoAlergiasById(idTipoAlergia: number):Observable<TipoAlergias>{
    return this.http.get<TipoAlergias>(environment.apiuri+'/tipoalergias/findOne/'+idTipoAlergia, { headers: this.storageService.returnToken()});
  }

  public updateTipoAlergias(idTipoAlergia:number, tipoalergias: TipoAlergias):Observable<TipoAlergias>{
    return this.http.put<TipoAlergias>(environment.apiuri+'/tipoalergias/update/'+idTipoAlergia, tipoalergias, { headers: this.storageService.returnToken()});
  }

  public saveTipoAlergias(tipoalergias: TipoAlergias):Observable<TipoAlergias>{
    return this.http.post<TipoAlergias>(environment.apiuriPublic+'/tipoalergias/save', tipoalergias, { headers: this.storageService.returnToken()});
  }

}
