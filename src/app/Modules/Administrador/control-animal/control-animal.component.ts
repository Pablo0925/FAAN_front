import { Component, OnInit } from '@angular/core';
import { Animal, TipoAnimal } from 'src/app/Models/models';
import { AnimalService } from 'src/app/Service/animal.service';

@Component({
  selector: 'app-control-animal',
  templateUrl: './control-animal.component.html',
  styleUrls: ['./control-animal.component.css']
})
export class ControlAnimalComponent implements OnInit {


  constructor(
    private animalesService: AnimalService
  ) { }


  ngOnInit(): void {
  }

  // GET ANIMALES FOR PARAMETERS
  public ListAnimales!: Animal[];

  // PAGES
  isPage:number=0;
  isSize:number=8
  isSosrt:string[] = ['nombreAnimal','asc']

  pageTotal:number=0;
  isFirst:boolean=false;
  isLast:boolean=false;

  public getAllMascotas(): void {
    try {
      this.animalesService.getAllAnimalesPages(this.isPage, this.isSize, this.isSosrt).subscribe((data:any)=> {
        if (data !== null) {
          this.ListAnimales = data.content;
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

  // TEXT FOR INPUT SEARCH
  public isTextDigit?: string

  // MODAL
  visible: boolean = false;

  showModalAnimales() {
    console.log(this.isTextDigit)
    this.visible = true;
    if (!this.isTextDigit) {
      this.getAllMascotas();
    } else {
      alert('PARAMETTROS')
    }
  }


}
