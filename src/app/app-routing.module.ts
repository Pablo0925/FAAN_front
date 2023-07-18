import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegistroMascotasComponent } from './Modules/Administrador/registro-mascotas/registro-mascotas.component';
import { FundacionComponent } from './Modules/SuperAdministrador/fundacion/fundacion.component';
import { PerfilUsuarioComponent } from './Modules/SuperAdministrador/perfil-usuario/perfil-usuario.component';
import { RegisterTipoAnimalComponent } from './Modules/Administrador/animal/register-tipo-animal/register-tipo-animal.component';
import { ControlAnimalComponent } from './Modules/Administrador/control-animal/control-animal.component';

const routes: Routes = [

  // MASCOTAS
  { path: 'registro-mascota', component: RegistroMascotasComponent},
  { path: 'control-animal', component: ControlAnimalComponent},

  //REGISTRO DE TIPO DE ANIMAL-----------------------------------------------------
  {path:'animal', component: RegisterTipoAnimalComponent  },

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
