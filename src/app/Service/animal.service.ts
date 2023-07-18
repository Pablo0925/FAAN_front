import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { Animal } from '../Models/animal';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaAnimal():Observable<Animal[]>{
    return this.http.get<Animal[]>(environment.apiuri+'/animal/list', { headers: this.storageService.returnToken()});
  }

  public getAnimalById(idAnimal: number):Observable<Animal>{
    return this.http.get<Animal>(environment.apiuri+'/animal/findOne/'+idAnimal, { headers: this.storageService.returnToken()});
  }

  public updateAnimal(idAnimal:number, Animal: Animal):Observable<Animal>{
    return this.http.put<Animal>(environment.apiuri+'/animal/update/'+idAnimal, Animal, { headers: this.storageService.returnToken()});
  }

  public saveAnimal(animal: Animal):Observable<Animal>{
    return this.http.post<Animal>(environment.apiuriPublic+'/animal/save', animal, { headers: this.storageService.returnToken()});
  }

}