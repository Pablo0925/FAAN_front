import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/enviroment';
import { SituacionIngreso } from '../Models/situacionIngreso';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class SituacionIngresoService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getPageableIncomeSituation(page: number, size: number, sort: string): Observable<SituacionIngreso[]> {
    return this.http.get<SituacionIngreso[]>(environment.apiuri + '/situacioningreso/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }

  public getAllIncomeSituation(): Observable<SituacionIngreso[]> {
    return this.http.get<SituacionIngreso[]>(environment.apiuri + '/situacioningreso/list');
  }

  public getSituacionIngresoById(idSituacionIngreso: number): Observable<SituacionIngreso> {
    return this.http.get<SituacionIngreso>(environment.apiuri + '/situacioningreso/findOne/' + idSituacionIngreso);
  }

  public updateSituacionIngreso(idSituacionIngreso: number, situacioningreso: SituacionIngreso): Observable<SituacionIngreso> {
    return this.http.put<SituacionIngreso>(environment.apiuri + '/situacioningreso/update/' + idSituacionIngreso, situacioningreso);
  }

  public saveSituacionIngreso(situacioningreso: SituacionIngreso): Observable<SituacionIngreso> {
    return this.http.post<SituacionIngreso>(environment.apiuri + '/situacioningreso/save', situacioningreso);
  }

}