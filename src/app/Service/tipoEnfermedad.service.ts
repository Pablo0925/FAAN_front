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


  public getListaTipoEnfermedad():Observable<TipoEnfermedad[]>{
    return this.http.get<TipoEnfermedad[]>(environment.apiuri+'/tipoenfermedad/list', { headers: this.storageService.returnToken()});
  }

  public getTipoEnfermedadById(idTipoEnfermedad: number):Observable<TipoEnfermedad>{
    return this.http.get<TipoEnfermedad>(environment.apiuri+'/tipoenfermedad/findOne/'+idTipoEnfermedad, { headers: this.storageService.returnToken()});
  }

  public updateTipoEnfermedad(idTipoEnfermedad:number, tipoenfermedad: TipoEnfermedad):Observable<TipoEnfermedad>{
    return this.http.put<TipoEnfermedad>(environment.apiuri+'/tipoenfermedad/update/'+idTipoEnfermedad, tipoenfermedad, { headers: this.storageService.returnToken()});
  }

  public saveTipoEnfermedad(tipoenfermedad: TipoEnfermedad):Observable<TipoEnfermedad>{
    return this.http.post<TipoEnfermedad>(environment.apiuriPublic+'/tipoenfermedad/save', tipoenfermedad, { headers: this.storageService.returnToken()});
  }

}
