import { Component, OnInit } from '@angular/core';
import { UploadEvent } from 'primeng/fileupload';
import { Fundacion } from 'src/app/Models/fundacion';
import { FundacionService } from 'src/app/Service/fundacion.service';
import { ImagenService } from 'src/app/Service/imagen.service';

@Component({
  selector: 'app-fundacion',
  templateUrl: './fundacion.component.html',
  styleUrls: ['./fundacion.component.css']
})
export class FundacionComponent implements OnInit {

  constructor(
    private fundacionService: FundacionService,
    private imagenService: ImagenService
  ) { }

  ngOnInit(): void {
    this.getDataFundation(1);
  }

  // MODEL
  public fundacion = new Fundacion();

  public getDataFundation(idFundacion: number) {
    this.fundacionService.getAllFundacionById(idFundacion).subscribe((data) => {
      this.fundacion = data;
    })
  }

  // MODAL
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  selectedFile!: File;
  isTieneArchivo: boolean = false;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.selectedFile.size > 300000) {
      // this.toastrService.warning(
      //   'El archivo seleccionado es demasiado grande',
      //   ' Por favor, seleccione un archivo menor a 300 KB.',
      //   {
      //     timeOut: 1000,
      //   }
      // );
      return;
    }
    this.imagenService.savePictureInBuket(this.selectedFile).subscribe((data)=>{
      console.log(data)
    })
    this.isTieneArchivo = true;
  }


  // UPDATE DATA FUNDATION
  public updateFundacionById():void{
    this.fundacionService.updateFundacionById(this.fundacion.idFudacion!, this.fundacion).subscribe((data)=>{
      this.fundacion = data;
      alert('update')
    })
  }
  
}
