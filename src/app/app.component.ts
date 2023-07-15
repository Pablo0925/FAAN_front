import { Component, OnInit } from '@angular/core';
import { CargarScrpitsService } from './Service/cargar-scrpits.service';
declare var navBar: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  isLoggin:boolean=false;

  constructor(
  ) {
  }

  ngOnInit(): void {

  }
  

}

