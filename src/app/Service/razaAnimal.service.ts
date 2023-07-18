import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { RazaAnimal } from '../Models/razaAnimal';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class RazaAnimalService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaRazaAnimal():Observable<RazaAnimal[]>{
    return this.http.get<RazaAnimal[]>(environment.apiuri+'/razaAnimal/list', { headers: this.storageService.returnToken()});
  }

  public getRazaAnimalById(idRazaAnimal: number):Observable<RazaAnimal>{
    return this.http.get<RazaAnimal>(environment.apiuri+'/razaAnimal/findOne/'+idRazaAnimal, { headers: this.storageService.returnToken()});
  }

  public updateRazaAnimal(idRazaAnimal:number, razaAnimal: RazaAnimal):Observable<RazaAnimal>{
    return this.http.put<RazaAnimal>(environment.apiuri+'/razaAnimal/update/'+idRazaAnimal, razaAnimal, { headers: this.storageService.returnToken()});
  }

  public saveRazaAnimal(razaAnimal: RazaAnimal):Observable<RazaAnimal>{
    return this.http.post<RazaAnimal>(environment.apiuriPublic+'/razaAnimal/save', razaAnimal, { headers: this.storageService.returnToken()});
  }

}