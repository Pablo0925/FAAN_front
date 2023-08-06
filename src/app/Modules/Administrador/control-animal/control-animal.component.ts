import { Component, OnInit } from '@angular/core';
import { ControlAnimal } from 'src/app/Models/controlAnimal'; 
import { Animal, Notificaciones,TipoAnimal, TipoVacuna, Vacuna } from 'src/app/Models/models';
import { VacunasAnimales } from 'src/app/Payloads/payloadVacunasAnimal';
import { AnimalService } from 'src/app/Service/animal.service';
import { PayloadService } from 'src/app/Service/peyloads.service';
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
    private vacunaService: VacunaService,
    private payloadservice: PayloadService
  ) {}
  tipoVacunaSeleccionada: TipoVacuna = new TipoVacuna();

  ngOnInit(): void {
    this.getAllTiposVacunas();
  }

  selectedSections: number[] = [];
  showVacunas: boolean = false;
  showEnfermedades: boolean = false;
  showTratamientos: boolean = false;
  showAlergias: boolean = false;
  showExamenesFisicos: boolean = false;

  showCard(section: number) {
    const index = this.selectedSections.indexOf(section);
    if (index === -1) {
      // If the section is not already selected, add it to the array.
      this.selectedSections.push(section);
    } else {
      // If the section is already selected, remove it from the array.
      this.selectedSections.splice(index, 1);
    }
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
  public loadingVacuna: boolean = false;

  public isEmpty(obj: any) {
		// return Object.keys(obj).length === 0;
		return obj ? Object.keys(obj).length === 0 : true;
	}

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

  public getListaVacunasByIdControlAnimal(idControlAnimal: number) {
    this.payloadservice.getPeyloadVacunasAnimalById(idControlAnimal).subscribe((data) => {
      this.vacunasAnimales = data
    })
  }

  


  public onRowSelect(event: any) {
		this.tipoVacuna = event;
    this.tipoVacunaSeleccionada = event;
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
    this.vacuna.controlAnimal = this.isControlAnimal;
    this.vacuna.estadoVacuna = 'A';
    this.vacunaService.saveVacuna(this.vacuna).subscribe((data) => {
      alert('SUCESSFULL');
      this.getListaVacunasByIdControlAnimal(this.isControlAnimal.idControlAnimal!)
      this.vacuna = {} as Vacuna;
      this.isControlAnimal = {} as ControlAnimal;
      this.selectedVacuna = {} as TipoVacuna;
      this.visibleVacuna = false;
    })
  }
  mostrarPanel: boolean = false;


  // SELECT ANIMAL
  isIdAnimal!: number
  isControlAnimal = new ControlAnimal();
  selectAnimal(idAnimal: number, controlAnimal: ControlAnimal) {
    this.isIdAnimal = idAnimal;
    this.isControlAnimal = controlAnimal;
    this.visible = false;
    this.getListaVacunasByIdControlAnimal(controlAnimal.idControlAnimal!)
  }

  

    actualizarVacuna() {

      if (this.tipoVacunaSeleccionada) {
        this.tipoVacunaService.updateTipoVacuna(this.tipoVacunaSeleccionada.idTipoVacuna, this.tipoVacunaSeleccionada)
          .subscribe((updatedVacuna: TipoVacuna) => {

            console.log('Tipo de vacuna actualizado:', updatedVacuna);
            this.visibleTipoVacuna = false;
          }, (error) => {
            console.error('Error al actualizar el tipo de vacuna:', error);
          });
      }
    }



  
}
