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

  public getAllTratamiento(page:number,size:number,sort:string): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(environment.apiuri + '/tratamiento/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaTratamiento():Observable<Tratamiento[]>{
    return this.http.get<Tratamiento[]>(environment.apiuri+'/tratamiento/list');
  }

  public getTratamientoById(idTratamiento: number):Observable<Tratamiento>{
    return this.http.get<Tratamiento>(environment.apiuri+'/tratamiento/findOne/'+idTratamiento);
  }

  public updateTratamiento(idTratamiento:number, tratamiento: Tratamiento):Observable<Tratamiento>{
    return this.http.put<Tratamiento>(environment.apiuri+'/tratamiento/update/'+idTratamiento, tratamiento);
  }

  public saveTratamiento(tratamiento: Tratamiento):Observable<Tratamiento>{
    return this.http.post<Tratamiento>(environment.apiuriPublic+'/tratamiento/save', tratamiento);
  }

}
