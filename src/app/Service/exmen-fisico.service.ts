import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { ExamenFisico } from '../Models/examenFisico';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ExamenFisicoService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllExamenFisico(page:number,size:number,sort:string): Observable<ExamenFisico[]> {
    return this.http.get<ExamenFisico[]>(environment.apiuri + '/examenFisico/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }

  public getListaExamenFisico():Observable<ExamenFisico[]>{
    return this.http.get<ExamenFisico[]>(environment.apiuri+'/examenFisico/list');
  }

  public getExamenFisicoById(idExamenFisico: number):Observable<ExamenFisico>{
    return this.http.get<ExamenFisico>(environment.apiuri+'/examenFisico/findOne/'+idExamenFisico);
  }

  public updateExamenFisico(idExamenFisico:number, ExamenFisico: ExamenFisico):Observable<ExamenFisico>{
    return this.http.put<ExamenFisico>(environment.apiuri+'/examenFisico/update/'+idExamenFisico, ExamenFisico);
  }

  public saveExamenFisico(examenFisico: ExamenFisico):Observable<ExamenFisico>{
    return this.http.post<ExamenFisico>(environment.apiuri+'/examenFisico/save', examenFisico);
  }

}