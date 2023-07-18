import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { Tratamiento } from '../Models/tratamiento';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaTratamiento():Observable<Tratamiento[]>{
    return this.http.get<Tratamiento[]>(environment.apiuri+'/tratamiento/list', { headers: this.storageService.returnToken()});
  }

  public getTratamientoById(idTratamiento: number):Observable<Tratamiento>{
    return this.http.get<Tratamiento>(environment.apiuri+'/tratamiento/findOne/'+idTratamiento, { headers: this.storageService.returnToken()});
  }

  public updateTratamiento(idTratamiento:number, tratamiento: Tratamiento):Observable<Tratamiento>{
    return this.http.put<Tratamiento>(environment.apiuri+'/tratamiento/update/'+idTratamiento, tratamiento, { headers: this.storageService.returnToken()});
  }

  public saveTratamiento(tratamiento: Tratamiento):Observable<Tratamiento>{
    return this.http.post<Tratamiento>(environment.apiuriPublic+'/tratamiento/save', tratamiento, { headers: this.storageService.returnToken()});
  }

}
