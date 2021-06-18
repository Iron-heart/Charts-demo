import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { DataService } from 'src/app/sevices/data.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-ng-apexcharts',
  templateUrl: './ng-apexcharts.component.html',
  styleUrls: ['./ng-apexcharts.component.css']
})
export class NgApexchartsComponent implements OnInit {

  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  public chartOptions: Partial<any> = {};

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      const values = data.map(item => item.Open);
      const dates = data.map(item => item.Date);
      this.chartOptions = {
        series: [
          {
            name: "Opens",
            data: values
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        title: {
          text: "Apex Chart"
        },
        xaxis: {
          categories: dates
        }
      };
    })
  }

}
