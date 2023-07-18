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


  public getListaidTipoTratamiento():Observable<TipoTratamiento[]>{
    return this.http.get<TipoTratamiento[]>(environment.apiuri+'/tipoTratamiento/list', { headers: this.storageService.returnToken()});
  }

  public getidTipoTratamientoById(idTipoTratamiento: number):Observable<TipoTratamiento>{
    return this.http.get<TipoTratamiento>(environment.apiuri+'/tipoTratamiento/findOne/'+idTipoTratamiento, { headers: this.storageService.returnToken()});
  }

  public updateidTipoTratamiento(idTipoTratamiento:number, tipoTratamiento: TipoTratamiento):Observable<TipoTratamiento>{
    return this.http.put<TipoTratamiento>(environment.apiuri+'/tipoTratamiento/update/'+idTipoTratamiento, tipoTratamiento, { headers: this.storageService.returnToken()});
  }

  public saveidTipoTratamiento(tipoTratamiento: TipoTratamiento):Observable<TipoTratamiento>{
    return this.http.post<TipoTratamiento>(environment.apiuriPublic+'/tipoTratamiento/save', tipoTratamiento, { headers: this.storageService.returnToken()});
  }

}
