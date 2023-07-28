import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/enviroment';
import { FichaRegistro } from '../Models/fichaRegistro';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class FichaRegistroService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getAllFichaRegistro(page: number, size: number, sort: string): Observable<FichaRegistro[]> {
    return this.http.get<FichaRegistro[]>(environment.apiuri + '/fichaRegistro/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaFichaRegistro(): Observable<FichaRegistro[]> {
    return this.http.get<FichaRegistro[]>(environment.apiuri + '/fichaRegistro/list');
  }

  public getFichaRegistroById(idPersona: number): Observable<FichaRegistro> {
    return this.http.get<FichaRegistro>(environment.apiuri + '/fichaRegistro/findOne/' + idPersona);
  }

  public updateFichaRegistro(idPersona: number, fichaRegistro: FichaRegistro): Observable<FichaRegistro> {
    return this.http.put<FichaRegistro>(environment.apiuri + '/fichaRegistro/update/' + idPersona, fichaRegistro);
  }

  public saveFichaRegistro(fichaRegistro: FichaRegistro): Observable<FichaRegistro> {
    return this.http.post<FichaRegistro>(environment.apiuri + '/fichaRegistro/save', fichaRegistro);
  }

}
