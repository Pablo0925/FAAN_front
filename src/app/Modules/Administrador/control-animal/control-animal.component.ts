import { Component, OnInit } from '@angular/core';
import { Animal, FichaMedica, TipoAnimal, TipoVacuna, Vacuna } from 'src/app/Models/models';
import { VacunasAnimales } from 'src/app/Payloads/payloadVacunasAnimal';
import { AnimalService } from 'src/app/Service/animal.service';
import { TipoVacunaService } from 'src/app/Service/tipoVacuna.service';
import { VacunaService } from 'src/app/Service/vacuna.service';

@Component({
  selector: 'app-control-animal',
  templateUrl: './control-animal.component.html',
  styleUrls: ['./control-animal.component.css']
})
export class ControlAnimalComponent implements OnInit {


  constructor(
    private animalesService: AnimalService,
    private tipoVacunaService: TipoVacunaService,
    private vacunaService: VacunaService
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
  vacunasAnimales: VacunasAnimales[] = [];

  public getListaVacunasByIdFichaMedica(idFichaMedica: number) {
    this.vacunaService.getListaVacunasByIdFichaMedica(idFichaMedica).subscribe((data)=>{
      this.vacunasAnimales = data
    })
  }

  // TEXT FOR INPUT SEARCH
  public isTextDigit: string = ""

  // MODAL
  visible: boolean = false;

  showModalAnimales() {
    this.visible = true;
    this.getAllMascotas();
  }

  // MODAL TIPO VACUNA
  tipoVacuna = new TipoVacuna();
  visibleTipoVacuna: boolean = false;

  showModalTipoVacuna() {
    this.visibleTipoVacuna = true;
    this.tipoVacuna = {} as TipoVacuna;
  }

  saveTipoVacuna() {
    this.tipoVacuna.estado = true;
    this.tipoVacunaService.saveTipoVacuna(this.tipoVacuna).subscribe((data) => {
      alert('SUCESSFULL');
      this.tipoVacuna = {} as TipoVacuna;
      this.visibleTipoVacuna = false;
    })
  }

  // GET VACUNAS
  listTipoVacuna: TipoVacuna[] = [];
  selectedVacuna = new TipoVacuna();

  getAllTiposVacunas() {
    this.tipoVacunaService.getListaTipoVacuna().subscribe((data) => {
      this.listTipoVacuna = data;
    });
  }

  beta() {
    console.log(this.selectedVacuna);
  }

  // MODAl ADD VACUNA FOR ANIMAL
  vacuna = new Vacuna();
  visibleVacuna: boolean = false;

  showModalVacuna() {
    this.getAllTiposVacunas();
    this.visibleVacuna = true;
    this.vacuna = {} as Vacuna;
  }

  saveVacuna() {
    this.vacuna.tipoVacuna = this.selectedVacuna;
    this.vacuna.fichaMedica = this.isFichaMedica;
    this.vacuna.estadoVacuna = 'A';
    this.vacunaService.saveVacuna(this.vacuna).subscribe((data) => {
      alert('SUCESSFULL');
      this.vacuna = {} as Vacuna;
      this.isFichaMedica = {} as FichaMedica;
      this.selectedVacuna = {} as TipoVacuna;
      this.visibleVacuna = false;
      this.getListaVacunasByIdFichaMedica(this.isFichaMedica.idFichaMedica!)

    })
  }

  // SELECT ANIMAL
  isIdAnimal!: number
  isFichaMedica = new FichaMedica()
  selectAnimal(idAnimal: number, fichaMedica: FichaMedica) {
    this.isIdAnimal = idAnimal;
    this.isFichaMedica = fichaMedica;
    this.visible = false;
    this.getListaVacunasByIdFichaMedica(fichaMedica.idFichaMedica!)
  }

}
