import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { TipoAnimal } from '../Models/tipoAnimal';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListatipoAnimal():Observable< TipoAnimal[]>{
    return this.http.get< TipoAnimal[]>(environment.apiuri+'/ tipoanimal/list', { headers: this.storageService.returnToken()});
  }

  public gettipoAnimalById(idTipoAnimal: number):Observable< TipoAnimal>{
    return this.http.get< TipoAnimal>(environment.apiuri+'/ tipoanimal/findOne/'+idTipoAnimal, { headers: this.storageService.returnToken()});
  }

  public updatetipoAnimal(idTipoAnimal:number,  tipoanimal:  TipoAnimal):Observable< TipoAnimal>{
    return this.http.put< TipoAnimal>(environment.apiuri+'/ tipoanimal/update/'+idTipoAnimal,  tipoanimal, { headers: this.storageService.returnToken()});
  }

  public savetipoAnimal( tipoanimal:  TipoAnimal):Observable< TipoAnimal>{
    return this.http.post< TipoAnimal>(environment.apiuriPublic+'/ tipoanimal/save',  tipoanimal, { headers: this.storageService.returnToken()});
  }

}
