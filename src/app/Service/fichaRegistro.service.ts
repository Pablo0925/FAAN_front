import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { FichaRegistro } from '../Models/fichaRegistro';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class FichaRegistroService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaFichaRegistro():Observable<FichaRegistro[]>{
    return this.http.get<FichaRegistro[]>(environment.apiuri+'/fichaRegistro/list', { headers: this.storageService.returnToken()});
  }

  public getFichaRegistroById(idPersona: number):Observable<FichaRegistro>{
    return this.http.get<FichaRegistro>(environment.apiuri+'/fichaRegistro/findOne/'+idPersona, { headers: this.storageService.returnToken()});
  }

  public updateFichaRegistro(idPersona:number, fichaRegistro: FichaRegistro):Observable<FichaRegistro>{
    return this.http.put<FichaRegistro>(environment.apiuri+'/fichaRegistro/update/'+idPersona, fichaRegistro, { headers: this.storageService.returnToken()});
  }

  public saveFichaRegistro(fichaRegistro: FichaRegistro):Observable<FichaRegistro>{
    return this.http.post<FichaRegistro>(environment.apiuriPublic+'/fichaRegistro/save', fichaRegistro, { headers: this.storageService.returnToken()});
  }

}
