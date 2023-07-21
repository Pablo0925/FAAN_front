import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { Enfermedad } from '../Models/enfermedad';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllEnfermedades(page:number,size:number,sort:string): Observable<Enfermedad[]> {
    return this.http.get<Enfermedad[]>(environment.apiuri + '/enfermedad/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }

  public getListaEnfermedad():Observable<Enfermedad[]>{
    return this.http.get<Enfermedad[]>(environment.apiuri+'/enfermedad/list');
  }

  public getEnfermedadById(idEnfermedad: number):Observable<Enfermedad>{
    return this.http.get<Enfermedad>(environment.apiuri+'/enfermedad/findOne/'+idEnfermedad);
  }

  public updateEnfermedad(idEnfermedad:number, Enfermedad: Enfermedad):Observable<Enfermedad>{
    return this.http.put<Enfermedad>(environment.apiuri+'/enfermedad/update/'+idEnfermedad, Enfermedad);
  }

  public saveEnfermedad(enfermedad: Enfermedad):Observable<Enfermedad>{
    return this.http.post<Enfermedad>(environment.apiuri+'/enfermedad/save', enfermedad);
  }

}