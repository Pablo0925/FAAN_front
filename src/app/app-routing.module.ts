import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MascotasComponent } from './Modules/Administrador/mascotas/mascotas.component';
import { RegistroMascotasComponent } from './Modules/Administrador/registro-mascotas/registro-mascotas.component';
import { FundacionComponent } from './Modules/SuperAdministrador/fundacion/fundacion.component';
import { PerfilUsuarioComponent } from './Modules/SuperAdministrador/perfil-usuario/perfil-usuario.component';

const routes: Routes = [

  // MASCOTAS
  { path: 'registro-mascota', component: RegistroMascotasComponent},
  { path: 'mascotas', component: MascotasComponent},

  // SHARED
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fundacion', component: FundacionComponent },
  { path: 'peril-usuario', component: PerfilUsuarioComponent },

  
  // PUBLIC
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
