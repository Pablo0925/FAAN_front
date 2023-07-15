import { Component, OnInit } from '@angular/core';
import { CargarScrpitsService } from './Service/cargar-scrpits.service';
import { Router } from '@angular/router';
import { StorageService } from './Service/storage.service';
declare var navBar: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isLogginPresent: boolean = false;

  constructor(
    private _CargarScript: CargarScrpitsService,
    private router: Router,
    private storageService: StorageService
  ) {
    _CargarScript.Cargar(["dashboard"]);
  }

  ngOnInit(): void {
    this.isLogginPresent = this.storageService.isLoggedIn();
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

  public checkRolesUserLogin(nombreRol:string): void {
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

}

