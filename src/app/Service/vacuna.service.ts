import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { Vacuna } from '../Models/vacuna';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllVacuna(page:number,size:number,sort:string): Observable<Vacuna[]> {
    return this.http.get<Vacuna[]>(environment.apiuri + '/vacuna/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }


  public getListaVacunas():Observable<Vacuna[]>{
    return this.http.get<Vacuna[]>(environment.apiuri+'/vacuna/list');
  }

  public getVacunaById(idVacuna: number):Observable<Vacuna>{
    return this.http.get<Vacuna>(environment.apiuri+'/vacuna/findOne/'+idVacuna);
  }

  public updateVacuna(idVacuna:number, vacuna: Vacuna):Observable<Vacuna>{
    return this.http.put<Vacuna>(environment.apiuri+'/vacuna/update/'+idVacuna, vacuna);
  }

  public saveVacuna(vacuna: Vacuna):Observable<Vacuna>{
    return this.http.post<Vacuna>(environment.apiuriPublic+'/vacuna/save', vacuna);
  }

}
