import { Component, OnInit } from '@angular/core';
import { UploadEvent } from 'primeng/fileupload';
import { Fundacion } from 'src/app/Models/fundacion';
import { FundacionService } from 'src/app/Service/fundacion.service';

@Component({
  selector: 'app-fundacion',
  templateUrl: './fundacion.component.html',
  styleUrls: ['./fundacion.component.css']
})
export class FundacionComponent implements OnInit {

  constructor(
    private fundacionService: FundacionService
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

  // UPDATE DATA FUNDATION
  public updateFundacionById():void{
    this.fundacionService.updateFundacionById(this.fundacion.idFudacion!, this.fundacion).subscribe((data)=>{
      this.fundacion = data;
      alert('update')
    })
  }
  
}
