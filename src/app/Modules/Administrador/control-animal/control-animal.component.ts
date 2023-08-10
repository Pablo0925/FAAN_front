import { Component, OnInit } from '@angular/core';
import { ControlAnimal } from 'src/app/Models/controlAnimal'; 
import { EstadoAnimal } from 'src/app/Models/estadoAnimal';
import { Animal, Notificaciones,TipoAnimal, TipoVacuna, Vacuna } from 'src/app/Models/models';
import { PayloadControlAnimal } from 'src/app/Payloads/payloadControlPorAnimal';
import { VacunasAnimales } from 'src/app/Payloads/payloadVacunasAnimal';
import { AnimalService } from 'src/app/Service/animal.service';
import { ControlAnimalService } from 'src/app/Service/controlAnimal.service';
import { EsatadoAnimalService } from 'src/app/Service/estadoAnimal.service';
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
    private controlAnimalService: ControlAnimalService,
    private estadoAnimalService: EsatadoAnimalService,
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
  isTextDigit!:string;

  public getAllMascotas(): void {
    try {
      this.animalesService.getAllAnimalesPagesOrPlacaOrName(this.isTextDigit, this.isPage, this.isSize, this.isSosrt).subscribe((data: any) => {
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

  controlesanimales: PayloadControlAnimal[] = [];

  public getListaVacunasByIdControlAnimal(idControlAnimal: number) {
    console.log("entro")
    this.payloadservice.getPeyloadVacunasAnimalById(idControlAnimal).subscribe(data => {
      this.vacunasAnimales = data
    })
  }


  public getListaControlAnimal(idAnimal: number) {
    console.log(idAnimal);
    this.payloadservice.getPeyloadControlAnimal(idAnimal).subscribe(data2=> {
      console.log("entro");
      console.log(data2);
    })
  }
  


  public onRowSelect(event: any) {
		this.tipoVacuna = event;
    this.tipoVacunaSeleccionada = event;
	}



  // MODAL
  visible: boolean = false;

  showModalAnimales() {
    this.visible = true;
    this.getAllMascotas();
  }

  // MODAL TIPO VACUNA
  tipoVacuna = new TipoVacuna();
  visibleTipoVacuna: boolean = false;

  control = new   ControlAnimal();
  visibleControl: boolean = false;

  showModalTipoVacuna() {
    this.visibleTipoVacuna = true;
    this.tipoVacuna = {} as TipoVacuna;
  }

  showModalControl() {
    this.visibleControl= true;
    this.control = {} as ControlAnimal;
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

  
  getAllControlAnimal() {
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
      this.visibleVacuna = false;
    })
  }
  mostrarPanel: boolean = false;

  estadoAnimal = new EstadoAnimal();
  idestado?:any;

  objetoanimal= new Animal();
  objetoestado= new EstadoAnimal();
  saveControl() {
    this.objetoanimal.idAnimal = this.isIdAnimal;
    this.control.animal = this.objetoanimal;
    console.log(this.control.animal);
    this.estadoAnimalService.saveEstadoAnimal(this.estadoAnimal).subscribe((data)=> {
      this.objetoestado.idEstadoAnimal = data.idEstadoAnimal 
      this.control.estadoAnimal = this.objetoestado;
      console.log(this.control.estadoAnimal);
      this.controlAnimalService.saveControl(this.control).subscribe((data)=> {

        alert('SUCESSFULL');
        this.getListaVacunasByIdControlAnimal(this.isControlAnimal.idControlAnimal!)
        this.control = {} as ControlAnimal;
        this.isControlAnimal = {} as ControlAnimal;
        this.visibleControl = false;
      })
    })
  }


  // SELECT ANIMAL
  isIdAnimal!: any
  isControlAnimal = new ControlAnimal();
  selectAnimal(idAnimal: number) {
    this.isIdAnimal = idAnimal;
    this.visible = false;
    this.getListaControlAnimal(this.isIdAnimal);
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
