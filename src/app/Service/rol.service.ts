import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from '../../environment/enviroment';
import { Rol } from '../Models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public getAllRoles(page:number,size:number,sort:string): Observable<Rol[]> {
    return this.http.get<Rol[]>(environment.apiuri + '/rol/pageable?' + `page=${page}&size=${size}&sort=${sort}`);
  }

  public getAllRolesFull(): Observable<Rol[]> {
    return this.http.get<Rol[]>(environment.apiuri + '/rol/list');
  }

}
