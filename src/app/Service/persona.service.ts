import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environment/enviroment';
import { Persona } from '../Models/persona';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient, private storageService: StorageService) { }


  public getListaPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(environment.apiuri+'/persona/list');
  }

  public getPersonaById(idPersona: number):Observable<Persona>{
    return this.http.get<Persona>(environment.apiuri+'/persona/findOne/'+idPersona);
  }

  public updatePersona(idPersona:number, persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(environment.apiuri+'/persona/update/'+idPersona, persona);
  }

  public savePersona(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(environment.apiuriPublic+'/persona/save', persona);
  }

}
