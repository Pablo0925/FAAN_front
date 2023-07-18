import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { TipoAnimal } from 'src/app/Models/tipoAnimal';
import { TipoAnimalService } from 'src/app/Service/tipo-animal.service';

@Component({
    selector: 'app-register-tipo-animal',
    templateUrl: './register-tipo-animal.component.html',
    styleUrls: ['./register-tipo-animal.component.css']
})
export class RegisterTipoAnimalComponent implements OnInit {

    public tipoAnimalDialog: boolean = false;

    public tipoAnimal = new TipoAnimal();

    public submitted: boolean = false;

    public ListTipoAnimal: TipoAnimal[] = [];

    constructor(private tipoAnimalService: TipoAnimalService) {

    }

    ngOnInit(): void {
        this.findPageableTipoAnimal();
    }

    public findPageableTipoAnimal() {
        try {
            this.tipoAnimalService.findByAllTipoAnimal(0, 3, []).subscribe((data: any) => {
                if (data !== null) {
                    console.log(data)
                    this.ListTipoAnimal = data.content;
                }
            });
        } catch (error) {
            console.log('Exeption')
        }

    }

    public saveAndUpdateTipoAnimal() {
        this.submitted = true;
        if (this.tipoAnimal.nombreTipo?.trim() && this.tipoAnimal.descripcionAnimal?.trim()) {
            if (this.tipoAnimal.idTipoAnimal) {
                this.updateTipoAnimal(this.tipoAnimal);
            } else {
                this.createTipoAnimal(this.tipoAnimal);
            }
            this.tipoAnimalDialog = false;
            this.tipoAnimal = {} as TipoAnimal;
        }
    }

    public createTipoAnimal(tipoAnimal: TipoAnimal): void {
        try {
            this.tipoAnimalService.saveTipoAnimal(tipoAnimal).subscribe((data) => {
                if (data != null) {
                    alert('succesfull created..')
                    this.ListTipoAnimal.push(data);
                }
            })
        } catch (error) {

            throw new Error()
        }
    }

    public updateTipoAnimal(tipoAnimal: TipoAnimal): void {
        this.tipoAnimalService.updateTipoAnimal(tipoAnimal.idTipoAnimal!, tipoAnimal).subscribe((data) => {
            if (data != null) {

                try {
                    const indexfind = this.ListTipoAnimal.findIndex((tanimal) => tanimal.idTipoAnimal === data.idTipoAnimal);
                    this.ListTipoAnimal[indexfind] = data;
                } catch (error) {
                    throw new Error()
                }

                alert('succesfull updated..')
            }
        })
    }

    public eliminadoLogicoDeLosTiposAnimales(
        tipoAnimal: TipoAnimal
    ) {
   
        tipoAnimal.estadoTipo = tipoAnimal.estadoTipo === 'A' ? 'I' : 'A';
        this.tipoAnimalService
            .updateTipoAnimal(
                tipoAnimal.idTipoAnimal!, tipoAnimal
            )
            .subscribe((data) => {
                if (data != null) {
                    if (tipoAnimal.estadoTipo) {
                      alert('Update')
                    }
                }
            });
    }

    public openNew() {
        this.tipoAnimal = {} as TipoAnimal;
        this.submitted = false;
        this.tipoAnimalDialog = true;
    }

    public editProduct(tipoAnimal: TipoAnimal) {
        this.tipoAnimal = { ...tipoAnimal };
        this.tipoAnimalDialog = true;
    }

    public hideDialog() {
        this.tipoAnimal = {} as TipoAnimal;
        this.tipoAnimalDialog = false;
        this.submitted = false;
    }

}

// para vaciar una interface
//    this.tipoAnimal = {} as TipoAnimal;