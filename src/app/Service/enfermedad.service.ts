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


  public getListaEnfermedad():Observable<Enfermedad[]>{
    return this.http.get<Enfermedad[]>(environment.apiuri+'/enfermedad/list', { headers: this.storageService.returnToken()});
  }

  public getEnfermedadById(idEnfermedad: number):Observable<Enfermedad>{
    return this.http.get<Enfermedad>(environment.apiuri+'/enfermedad/findOne/'+idEnfermedad, { headers: this.storageService.returnToken()});
  }

  public updateEnfermedad(idEnfermedad:number, Enfermedad: Enfermedad):Observable<Enfermedad>{
    return this.http.put<Enfermedad>(environment.apiuri+'/enfermedad/update/'+idEnfermedad, Enfermedad, { headers: this.storageService.returnToken()});
  }

  public saveEnfermedad(enfermedad: Enfermedad):Observable<Enfermedad>{
    return this.http.post<Enfermedad>(environment.apiuriPublic+'/enfermedad/save', enfermedad, { headers: this.storageService.returnToken()});
  }

}