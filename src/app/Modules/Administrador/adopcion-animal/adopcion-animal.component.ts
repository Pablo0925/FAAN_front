import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Models/animal';
import { DetalleAdopcion } from 'src/app/Models/detalleEncabezado';
import { EncabezadoAdopcion } from 'src/app/Models/encabezadoAdopcion';
import { FichaMedica } from 'src/app/Models/fichaMedica';
import { FichaRegistro } from 'src/app/Models/fichaRegistro';
import { Fundacion } from 'src/app/Models/fundacion';
import { Persona } from 'src/app/Models/persona';
import { RazaAnimal } from 'src/app/Models/razaAnimal';
import { SituacionIngreso } from 'src/app/Models/situacionIngreso';
import { TipoAnimal } from 'src/app/Models/tipoAnimal';
import { AnimalService } from 'src/app/Service/animal.service';
import { DetalleEncabezadoService } from 'src/app/Service/detalleEncabezado.service';
import { EncabezadoAdopcionService } from 'src/app/Service/encabezadoAdopcion.service';
import { FichaMedicaService } from 'src/app/Service/fichaMedica.service';
import { FichaRegistroService } from 'src/app/Service/fichaRegistro.service';
import { ImagenService } from 'src/app/Service/imagen.service';
import { PersonaService } from 'src/app/Service/persona.service';
import { RazaAnimalService } from 'src/app/Service/razaAnimal.service';
import { ScreenSizeService } from 'src/app/Service/screen-size-service.service';
import { SituacionIngresoService } from 'src/app/Service/situacionIngreso.service';
import { TipoAnimalService } from 'src/app/Service/tipo-animal.service';

@Component({
	selector: 'app-adopcion-animal',
	templateUrl: './adopcion-animal.component.html',
	styleUrls: ['./adopcion-animal.component.css'],
})
export class AdopcionAnimalComponent implements OnInit {
	// card view
	public listAnimal: Animal[] = [];
	public submitted: boolean = false;

	// activar o desactivar dialog
	adopcionAnimalDialog: boolean = false;

	// Datos del select dialog
	public animal = new Animal();
	public animalSelect = new Animal();
	public tipoAnimalSelect = '';
	public razaAnimalSelect = '';
	public fechaAdoption = new Date();

	public encabezadoAdopcionObject = new EncabezadoAdopcion();
	public detalleEncabesadoObject = new DetalleAdopcion();

	//Size of window..
	public screenWidth: number = 0;
	public screenHeight: number = 0;

	public loading: boolean = false;
	public totalRecords!: number;

	//VARIABLE FOR SEARCH BY ATRIBUTE NAME
	public valueAtribute: string = '';
	public submitFindAtribute: boolean = false;

	//RESCATISTA - PERSON---------
	public persona = new Persona();
	public lisPersona: Persona[] = [];
	public totalPersons!: number;
	public loadingPerson: boolean = false;
	public valueAtributeCI: string = '';

	//RAZA ANIMAL--------------------------------------
	public razaAnimal = new RazaAnimal();
	public listRazaAnimal: RazaAnimal[] = [];

	constructor(
		private razaAnimalService: RazaAnimalService,
		private animalService: AnimalService,
		private personaService: PersonaService,
		private screenSizeService: ScreenSizeService,
		private encabezadoAdopcion: EncabezadoAdopcionService,
		private detalleAdopcion: DetalleEncabezadoService
	) { }

	ngOnInit() {
		this.findPageableAnimal(0, 10, ['idAnimal', 'asc']);
	}

	public findPageableAnimal(page: number, size: number, sort: string[]) {
		try {
			this.animalService.getAllAnimalesPages(page, size, sort).subscribe(
				(data: any) => {
					if (data != null) {
						console.log(data);
						this.listAnimal = data.content;
						console.log('ddddddddddddddddddddd');
						console.log(this.listAnimal);
						// this.totalRecords = data.totalElements;
						// this.loading = false;
					}
				},
				(error) => {
					console.error(error);
					// this.loading = false;
				}
			);
		} catch (error) {
			throw new Error();
		}
	}

	showDialog(animalse: Animal) {
		this.animalSelect = animalse;
		this.tipoAnimalSelect = animalse.razaAnimal?.tipoAnimal?.nombreTipo || '';
		this.razaAnimalSelect = animalse.razaAnimal?.nombreRaza || '';
		
		this.fechaAdoption = new Date();
		// this.fechaAdoption = fechaAct.toLocaleDateString();
		this.adopcionAnimalDialog = true;
	}

	public onRowSelect(event: any) {
		this.persona = event;
	}

	public loadPersonalLazy(event: any = null) {
		this.loadingPerson = true;
		const page = event ? event.first / event.rows : 0;
		const size = event ? event.rows : 4;
		this.pageablePersona(page, size, ['identificacion', 'asc']);
	}

	public pageablePersona(page: number, size: number, sort: string[]) {
		try {
			this.personaService
				.getListaPersonas(page, size, sort)
				.subscribe((data: any) => {
					this.lisPersona = data.content;
					this.totalPersons = data.totalElements;
					this.loadingPerson = false;
				});
		} catch (error) {
			throw new Error();
		}
	}

	public getSizeWindowResize() {
		const { width, height } = this.screenSizeService.getCurrentSize();
		this.screenWidth = width;
		this.screenHeight = height;

		this.screenSizeService.onResize.subscribe(({ width, height }) => {
			this.screenWidth = width;
			this.screenHeight = height;
		});
	}

	public isEmpty(obj: any) {
		// return Object.keys(obj).length === 0;
		return obj ? Object.keys(obj).length === 0 : true;
	}

	public avatarURL: string = '';
	public selectedFile!: File;
	public onBasicUpload(event: any) {
		this.selectedFile = event.target.files[0];

		const imageURL = URL.createObjectURL(this.selectedFile);
		this.avatarURL = imageURL;
		// console.log(this.selectedFile.size)
		console.log(imageURL);
		if (this.selectedFile && this.selectedFile.size > 1000000) {
			event.target.value = null;
		} else {
		}
	}

	public emptySelectedPerson() {
		this.persona = {} as Persona;
	}

	public findByAtributeName(code: number) {
		if (code === 1) {
			this.loading = true;
			this.submitFindAtribute = true;
			this.razaAnimalService
				.getAllRazaAnimalAtribute(
					0,
					4,
					['idRazaAnimal', 'asc'],
					'nombreRaza',
					this.valueAtribute
				)
				.subscribe((data: any) => {
					if (data !== null) {
						this.listRazaAnimal = data.content;
						this.loading = false;
					}
				});
		} else {
			this.loadingPerson = true;
			this.submitFindAtribute = true;
			this.personaService
				.getListaPersonasAtribute(
					0,
					3,
					['identificacion', 'asc'],
					'identificacion',
					this.valueAtributeCI
				)
				.subscribe((data: any) => {
					if (data !== null) {
						this.lisPersona = data.content;
						this.loadingPerson = false;
					}
				});
		}
	}

	saveAdopcion() {
		console.log(this.persona)
		console.log(this.encabezadoAdopcionObject)
		console.log(this.detalleEncabesadoObject)
		console.log(this.animal)

				this.encabezadoAdopcionObject.fechaAdopcion = this.fechaAdoption;
				this.encabezadoAdopcionObject.persona = this.persona;
				this.encabezadoAdopcion.saveEncabezadoAdopcion(this.encabezadoAdopcionObject)
					.subscribe((data1) => {
						this.detalleEncabesadoObject.encabezadoAdopcion = data1;
						this.detalleEncabesadoObject.animal = this.animalSelect;
						console.log("sssssssssssssssssssssssssssssssssssss")
						console.log(this.detalleEncabesadoObject)
						console.log("sssssssssssssssssssssssssssssssssssss")
						this.detalleAdopcion.saveDetalleAdopcion(this.detalleEncabesadoObject).subscribe((data2) => {
							if (data2 != null) {
								alert('succesfull created..');
								// this.listAnimal.push(data);
								// this.closeDialog();
							} else {
								alert('succesfull no created..');
							}
						});
					});
			
	}
}
