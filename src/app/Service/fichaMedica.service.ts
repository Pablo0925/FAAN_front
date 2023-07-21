import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { FichaMedica } from '../Models/fichaMedica';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class FichaMedicaService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllFichaMedica(page: number, size: number, sort: string): Observable<FichaMedica[]> {
    return this.http.get<FichaMedica[]>(environment.apiuri + '/fichaMedica/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }

  public getListaidFichaMedica(): Observable<FichaMedica[]> {
    return this.http.get<FichaMedica[]>(environment.apiuri + '/fichaMedica/list');
  }

  public getidFichaMedicaById(idFichaMedica: number): Observable<FichaMedica> {
    return this.http.get<FichaMedica>(environment.apiuri + '/fichaMedica/findOne/' + idFichaMedica);
  }

  public updateidFichaMedica(idFichaMedica: number, FichaMedica: FichaMedica): Observable<FichaMedica> {
    return this.http.put<FichaMedica>(environment.apiuri + '/fichaMedica/update/' + idFichaMedica, FichaMedica);
  }

  public saveidFichaMedica(fichaMedica: FichaMedica): Observable<FichaMedica> {
    return this.http.post<FichaMedica>(environment.apiuri + '/fichaMedica/save', fichaMedica);
  }

}
