import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Fundacion } from '../Models/fundacion';
import { Observable } from 'rxjs';
import { environment } from '../environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FundacionService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getAllFundacion(page:number,size:number,sort:string): Observable<Fundacion[]> {
    return this.http.get<Fundacion[]>(environment.apiuri + '/fundacion/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }
  
  public getListaFundacion():Observable<Fundacion[]>{
    return this.http.get<Fundacion[]>(environment.apiuri+'/fundacion/list');
  }


  public getFundacionById(idFundacion:number): Observable<Fundacion> {
    return this.http.get<Fundacion>(environment.apiuri + '/fundacion/findOne/' + idFundacion);
  }

  public updateFundacionById(idFundacion:number, fundacion:Fundacion): Observable<Fundacion>{
    return this.http.put<Fundacion>(environment.apiuri + '/fundacion/update/' + idFundacion, fundacion);
  }

  public saveFundacion(fundacion: Fundacion):Observable<Fundacion>{
    return this.http.post<Fundacion>(environment.apiuriPublic+'/fundacion/save', fundacion);
  }

}
