import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { TipoVacuna } from '../Models/tipoVacuna';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TipoVacunaService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllTipoVacuna(page:number,size:number,sort:string): Observable<TipoVacuna[]> {
    return this.http.get<TipoVacuna[]>(environment.apiuri + '/tipoVacuna/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaTipoVacuna():Observable<TipoVacuna[]>{
    return this.http.get<TipoVacuna[]>(environment.apiuri+'/tipoVacuna/list');
  }

  public getTipoVacunaById(idTipoVacuna: number):Observable<TipoVacuna>{
    return this.http.get<TipoVacuna>(environment.apiuri+'/tipoVacuna/findOne/'+idTipoVacuna);
  }

  public updateTipoVacuna(idTipoVacuna:number, tipoVacuna: TipoVacuna):Observable<TipoVacuna>{
    return this.http.put<TipoVacuna>(environment.apiuri+'/tipoVacuna/update/'+idTipoVacuna, tipoVacuna);
  }

  public saveTipoVacuna(tipoVacuna: TipoVacuna):Observable<TipoVacuna>{
    return this.http.post<TipoVacuna>(environment.apiuriPublic+'/tipoVacuna/save', tipoVacuna);
  }

}
