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


  public getListaAlergias():Observable<Alergias[]>{
    return this.http.get<Alergias[]>(environment.apiuri+'/alergias/list', { headers: this.storageService.returnToken()});
  }

  public getAlergiasById(idAlergias: number):Observable<Alergias>{
    return this.http.get<Alergias>(environment.apiuri+'/alergias/findOne/'+idAlergias, { headers: this.storageService.returnToken()});
  }

  public updateAlergias(idAlergias:number, Alergias: Alergias):Observable<Alergias>{
    return this.http.put<Alergias>(environment.apiuri+'/alergias/update/'+idAlergias, Alergias, { headers: this.storageService.returnToken()});
  }

  public saveAlergias(alergias: Alergias):Observable<Alergias>{
    return this.http.post<Alergias>(environment.apiuriPublic+'/alergias/save', alergias, { headers: this.storageService.returnToken()});
  }

}