import { Component, OnInit } from '@angular/core';
import { CargarScrpitsService } from 'src/app/Service/cargar-scrpits.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private _CargarScript: CargarScrpitsService,
  ) {
    _CargarScript.Cargar(["dashboard"]);
  }

  ngOnInit(): void {

  }
  
}
