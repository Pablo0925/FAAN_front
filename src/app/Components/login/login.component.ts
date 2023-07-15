import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { Usuario, usuarioLoginDTO } from 'src/app/Models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: usuarioLoginDTO = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public infoUsuario = new Usuario();


  // METHOD AUTHENTICATION USER
  public singIn(): void {
    if (!this.usuario.password || !this.usuario.password) {
      alert('EMPYTY FIELDS')
    } else {
      this.authService.login(this.usuario).subscribe(data => {
        if (!data) {
          console.log('CREDENCIALES INCORRECTAS');
          localStorage.removeItem('id_username');
          localStorage.removeItem('id_persona');
          localStorage.removeItem('foto');
          localStorage.removeItem('rol');
          localStorage.removeItem('username');
          localStorage.removeItem('token');
        } else {
          this.infoUsuario = data;
          console.log(data)
          if (this.infoUsuario.roles.length! > 1) {
            this.modalView();
          } else {
            alert('BIENVENIDO')
            // STORE IN STORAGE
            // localStorage.setItem('token', String(this.infoUsuario.token));
            localStorage.setItem('id_username', String(this.infoUsuario.idUsuario));
            localStorage.setItem('id_persona', String(this.infoUsuario.persona.idPersona));
            localStorage.setItem('foto', String(this.infoUsuario.fotoPerfil));
            localStorage.setItem('username', String(this.infoUsuario.username));

            for (let rol of this.infoUsuario.roles!) {
              localStorage.setItem('rol', String(rol.nombreRol));
            }
            setTimeout(() => {
              window.location.reload();
              location.replace('/dashboard');
            }, 1500);
          }
        }
      },
        (err) => {
          console.log('Error -> ' + err)
        })
    }
  }

  // VIEW TWO - MORE ROLES
  public visiblePeriodoMensual: boolean = false;

  public modalView() {
    this.visiblePeriodoMensual = true;
  }
}
