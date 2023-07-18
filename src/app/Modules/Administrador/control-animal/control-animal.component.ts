import { Component, OnInit } from '@angular/core';
import { Animal, TipoAnimal, TipoVacuna, Vacuna } from 'src/app/Models/models';
import { AnimalService } from 'src/app/Service/animal.service';
import { TipoVacunaService } from 'src/app/Service/tipoVacuna.service';

@Component({
  selector: 'app-control-animal',
  templateUrl: './control-animal.component.html',
  styleUrls: ['./control-animal.component.css']
})
export class ControlAnimalComponent implements OnInit {


  constructor(
    private animalesService: AnimalService,
    private tipoVacunaService: TipoVacunaService
  ) { }


  ngOnInit(): void {
  }

  // GET ANIMALES FOR PARAMETERS
  public ListAnimales!: Animal[];

  // PAGES
  isPage: number = 0;
  isSize: number = 8
  isSosrt: string[] = ['nombreAnimal', 'asc']

  pageTotal: number = 0;
  isFirst: boolean = false;
  isLast: boolean = false;

  public getAllMascotas(): void {
    try {
      this.animalesService.getAllAnimalesPagesOrPlacaOrName(this.isTextDigit!, this.isPage, this.isSize, this.isSosrt).subscribe((data: any) => {
        if (data !== null) {
          this.ListAnimales = data.content;
          console.log(data.content)
          this.pageTotal = data.totalPages
        }
      });
    } catch (error) {
      console.log('Exeption')
    }
  }

  anteriorPage(): void {
    if (!this.isFirst) {
      this.isPage--;
      this.getAllMascotas();
    }
  }

  siguientePage(): void {
    if (!this.isLast) {
      this.isPage++;
      this.getAllMascotas();
    }
  }

  // VER DATOS VACUNAS
  public verDatosVacunasByIdFichaAnimal(idFichaAnimal: number) {

  }

  // TEXT FOR INPUT SEARCH
  public isTextDigit?: string

  // MODAL
  visible: boolean = false;

  showModalAnimales() {
    this.visible = true;
    this.getAllMascotas();
  }

  // MODAL TIPO VACUNA
  tipoVacuna= new TipoVacuna();
  visibleTipoVacuna: boolean = false;

  showModalTipoVacuna() {
    this.visibleTipoVacuna = true;
    this.tipoVacuna = {} as TipoVacuna;
  }

  saveTipoVacuna(){
    this.tipoVacuna.estado = true;
    this.tipoVacunaService.saveTipoVacuna(this.tipoVacuna).subscribe((data)=>{
      alert('SUCESSFULL');
      this.tipoVacuna = {} as TipoVacuna;
      this.visibleTipoVacuna = false;
    })
  }

  // GET VACUANAS
  listTipoVacuna:TipoVacuna[] = [];
  getAllTiposVacunas(){
    this.tipoVacunaService.getListaTipoVacuna().subscribe((data)=>{
      this.listTipoVacuna = data;
    })
  }

  // MODAl ADD VACUNA FOR ANIMAL
  vacuna = new Vacuna();
  visibleVacuna: boolean = false;
  selectedVacuna: Vacuna | undefined;
  showModalVacuna() {
    this.getAllTiposVacunas();
    this.visibleVacuna = true;
    this.vacuna = {} as Vacuna;
  }

  saveVacuna(){
    this.tipoVacunaService.saveTipoVacuna(this.tipoVacuna).subscribe((data)=>{
      alert('SUCESSFULL');
      this.vacuna = {} as Vacuna;
      this.visibleVacuna = false;
    })
  }

}
