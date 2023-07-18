import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
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
    this.graficoOne();
  }

  data: any;
  options: any;

  // GRAPHIC ONE
  public graficoOne(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

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
