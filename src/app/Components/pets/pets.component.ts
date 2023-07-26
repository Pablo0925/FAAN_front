import { Component, OnInit } from '@angular/core';
import { CargarScrpitsService } from 'src/app/Service/cargar-scrpits.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './index.html',
  styleUrls: ['css/style.css']
})
export class PetsComponent implements OnInit {
  
  constructor(
    private _CargarScript: CargarScrpitsService,
  ) {
    _CargarScript.Cargar(["pets"]);
  }

  ngOnInit(): void {

  }
  
}
