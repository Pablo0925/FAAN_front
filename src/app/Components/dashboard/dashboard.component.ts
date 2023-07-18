import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PeyloadNumeroAdopcionFecha } from 'src/app/Payloads/peyloadNumeroAdopcionFecha';
import { PeyloadNumeroAdopcionRaza } from 'src/app/Payloads/peyloadNumeroAdopcionRaza';
import { CargarScrpitsService } from 'src/app/Service/cargar-scrpits.service';
import { PayloadService } from 'src/app/Service/peyloads.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _CargarScript: CargarScrpitsService,
    private payloadService:PayloadService
  ) {
    _CargarScript.Cargar(["dashboard"]);
  }

  ngOnInit(): void {
    this.getDatas();
  }

  data: any;
  options: any;

  payloadNAdopcionRaza: PeyloadNumeroAdopcionRaza[] = [];
  payloadNAdopcionYears: PeyloadNumeroAdopcionFecha[] = [];

  // DATAS
  getDatas(){
    this.payloadService.getAllPeyloadNumeroAdopcionRaza().subscribe((data)=>{
      this.payloadNAdopcionRaza = data;
      const razas = this.payloadNAdopcionRaza.map(animales => animales.nombreRaza); 
      const adopciones = this.payloadNAdopcionRaza.map(animales => animales.numeroAdopcion);
      this.graficoPastel(razas, adopciones);
    })
    this.payloadService.getAllPeyloadNumeroAdopcionFecha().subscribe((data)=>{
      this.payloadNAdopcionYears = data;
      console.log(this.payloadNAdopcionYears)
      const years = this.payloadNAdopcionYears.map(animales => animales.fechaAdopcion); 
      const adopciones = this.payloadNAdopcionYears.map(animales => animales.numeroAdopcionFecha);
      this.graficoLine(years, adopciones);
    })
  }

  // GRAPHICS

  public chartPastel: any;
  public chartLiner: any;

  graficoPastel(nombresRazas: any, adopcionesPorRaza: any) {
    if (this.chartPastel) {
      this.chartPastel.destroy();
    }
    this.chartPastel = new Chart("myChartPastel", {
      type: 'pie',
      data: {
        labels: nombresRazas,
        datasets: [{
          data: adopcionesPorRaza,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(255, 99, 132)'
            },
            position: 'bottom'
          }
        }
      }
    });
  }

  public graficoLine(years: any, adopcionesPorAño: any) {
    if (this.chartLiner) {
      this.chartLiner.destroy();
    }
    this.chartLiner = new Chart("myChartLine", {
      type: 'line',
      data: {
        labels: years, 
        datasets: [{
          label: '# de Adopciones',
          data: adopcionesPorAño,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          fill: false,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category', 
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    });
  }

}
