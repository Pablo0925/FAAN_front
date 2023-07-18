import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { FichaMedica } from '../Models/fichaMedica';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class FichaMedicaService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaidFichaMedica():Observable<FichaMedica[]>{
    return this.http.get<FichaMedica[]>(environment.apiuri+'/fichaMedica/list', { headers: this.storageService.returnToken()});
  }

  public getidFichaMedicaById(idFichaMedica: number):Observable<FichaMedica>{
    return this.http.get<FichaMedica>(environment.apiuri+'/fichaMedica/findOne/'+idFichaMedica, { headers: this.storageService.returnToken()});
  }

  public updateidFichaMedica(idFichaMedica:number, FichaMedica: FichaMedica):Observable<FichaMedica>{
    return this.http.put<FichaMedica>(environment.apiuri+'/fichaMedica/update/'+idFichaMedica, FichaMedica, { headers: this.storageService.returnToken()});
  }

  public saveidFichaMedica(fichaMedica: FichaMedica):Observable<FichaMedica>{
    return this.http.post<FichaMedica>(environment.apiuriPublic+'/fichaMedica/save', fichaMedica, { headers: this.storageService.returnToken()});
  }

}
