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


  public getListaExamenFisico():Observable<ExamenFisico[]>{
    return this.http.get<ExamenFisico[]>(environment.apiuri+'/examenFisico/list', { headers: this.storageService.returnToken()});
  }

  public getExamenFisicoById(idExamenFisico: number):Observable<ExamenFisico>{
    return this.http.get<ExamenFisico>(environment.apiuri+'/examenFisico/findOne/'+idExamenFisico, { headers: this.storageService.returnToken()});
  }

  public updateExamenFisico(idExamenFisico:number, ExamenFisico: ExamenFisico):Observable<ExamenFisico>{
    return this.http.put<ExamenFisico>(environment.apiuri+'/examenFisico/update/'+idExamenFisico, ExamenFisico, { headers: this.storageService.returnToken()});
  }

  public saveExamenFisico(examenFisico: ExamenFisico):Observable<ExamenFisico>{
    return this.http.post<ExamenFisico>(environment.apiuriPublic+'/examenFisico/save', examenFisico, { headers: this.storageService.returnToken()});
  }

}