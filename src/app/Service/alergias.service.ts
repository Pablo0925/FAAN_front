import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { Alergias } from '../Models/alergias';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllAlergias(page:number,size:number,sort:string): Observable<Alergias[]> {
    return this.http.get<Alergias[]>(environment.apiuri + '/alergias/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaAlergias():Observable<Alergias[]>{
    return this.http.get<Alergias[]>(environment.apiuri+'/alergias/list');
  }

  public getAlergiasById(idAlergias: number):Observable<Alergias>{
    return this.http.get<Alergias>(environment.apiuri+'/alergias/findOne/'+idAlergias);
  }

  public updateAlergias(idAlergias:number, Alergias: Alergias):Observable<Alergias>{
    return this.http.put<Alergias>(environment.apiuri+'/alergias/update/'+idAlergias, Alergias);
  }

  public saveAlergias(alergias: Alergias):Observable<Alergias>{
    return this.http.post<Alergias>(environment.apiuri+'/alergias/save', alergias);
  }

}