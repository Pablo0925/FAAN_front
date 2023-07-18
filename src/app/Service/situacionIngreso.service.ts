import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { SituacionIngreso } from '../Models/situacionIngreso';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class SituacionIngresoService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaSituacionIngreso():Observable<SituacionIngreso[]>{
    return this.http.get<SituacionIngreso[]>(environment.apiuri+'/situacioningreso/list', { headers: this.storageService.returnToken()});
  }

  public getSituacionIngresoById(idSituacionIngreso: number):Observable<SituacionIngreso>{
    return this.http.get<SituacionIngreso>(environment.apiuri+'/situacioningreso/findOne/'+idSituacionIngreso, { headers: this.storageService.returnToken()});
  }

  public updateSituacionIngreso(idSituacionIngreso:number, situacioningreso: SituacionIngreso):Observable<SituacionIngreso>{
    return this.http.put<SituacionIngreso>(environment.apiuri+'/situacioningreso/update/'+idSituacionIngreso, situacioningreso, { headers: this.storageService.returnToken()});
  }

  public saveSituacionIngreso(situacioningreso: SituacionIngreso):Observable<SituacionIngreso>{
    return this.http.post<SituacionIngreso>(environment.apiuriPublic+'/situacioningreso/save', situacioningreso, { headers: this.storageService.returnToken()});
  }

}