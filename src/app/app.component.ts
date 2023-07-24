import { Component, OnInit } from '@angular/core';
import { CargarScrpitsService } from './Service/cargar-scrpits.service';
import { Router } from '@angular/router';
import { StorageService } from './Service/storage.service';
import { NotifacionesService } from './Service/notifaciones.service';
import { Notificaciones } from './Models/notificacion';
import { Message } from 'primeng/api';
declare var navBar: any;
import { webSocket } from 'rxjs/webSocket';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // IMG PROFILE
  imagenUrl: string | null = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  public isLogginPresent: boolean = false;

  constructor(
    private _CargarScript: CargarScrpitsService,
    private router: Router,
    private storageService: StorageService,
    private notificacionesService: NotifacionesService
  ) {
    _CargarScript.Cargar(["dashboard"]);
  }

  ngOnInit(): void {
    this.isLogginPresent = this.storageService.isLoggedIn();
    this.getAllNotificaciones();
  }

  // LOGOUT
  public logOut() {
    this.isLogginPresent = false;
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  // CHECK ROL
  isSuperAdministrador: boolean = false;
  isAdministrador: boolean = false;

  public checkRolesUserLogin(nombreRol: string): void {
    switch (nombreRol) {
      case 'SUPERADMINISTRADOR':
        this.isSuperAdministrador = true;
        this.isAdministrador = false;
        break;
      case 'ADMINISTRADOR':
        this.isSuperAdministrador = false;
        this.isAdministrador = true;
        break;
      default:
        this.isLogginPresent = false;
        break;
    };
  }

  // NOTIFICACIONES
  msgs!: Message[];
  viewNotificacionesPanle: boolean = false;
  listNotificaciones: Notificaciones[] = [];
  countNotificaciones: number = 0;
  public getAllNotificaciones() {
   
  }

}

