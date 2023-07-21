import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Fundacion, Persona, Rol, Usuario } from 'src/app/Models/models';
import { FundacionService } from 'src/app/Service/fundacion.service';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private fundacionService: FundacionService,
    private toastService: ToastrService

  ) { }

  public idUsuarioLoggin?: any;

  ngOnInit(): void {
    this.idUsuarioLoggin = localStorage.getItem('id_username');
    this.getDataUser(this.idUsuarioLoggin);
  }

  // GET DATA FOR USER-CONNECT
  usuario?: Usuario;
  roles: string[] = [];
  persona = new Persona();

  public getDataUser(idUsername: number): void {
    this.usuarioService.getUsuarioById(idUsername).subscribe((data) => {
      this.usuario = data;
      this.persona = this.usuario.persona;
      for (let rol of this.usuario.roles) {
        this.roles.push(rol.nombreRol!)
      }
      this.getDataFundation(1);
    })
  }

  // MODEL
  public fundacion = new Fundacion();
  public getDataFundation(idFundacion: number) {
    this.fundacionService.getFundacionById(idFundacion).subscribe((data) => {
      this.fundacion = data;
    })
  }

  // MODAL
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  // UPDATE DATA - USER
  public updatePerfilById():void{

  }

  // IMAGEN SELECT
  selectedFile!: File;
  isKeyImage: string = "";
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.size)
    if (this.selectedFile && this.selectedFile.size > 1000000) {
      this.toastService.warning(
        'El archivo seleccionado es demasiado grande',
        ' Por favor, seleccione un archivo menor a 1000 KB.',
        {
          timeOut: 1000,
        }
      );
      event.target.value = null;

    } else {
      this.toastService.success(
        'Foto seleccionada',
        'Correctamente',
        {
          timeOut: 1000,
        }
      )
    }
  }

  // OTHERS
  generos = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' }
  ];
}
