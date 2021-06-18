import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/sevices/data.service';
import { StockPrice } from 'src/app/StockPrice';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.css']
})
export class NgxChartsComponent implements OnInit {
 
  results: any[] = [];
  view: any = [1200, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dataService: DataService) {}

  onSelect(event: any) {
    console.log(event);
  }
  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      this.results = res.map((data) => {
        return {
          "name": data.Date,
          "value": data.Open
        }
      });
      console.log(this.results);
    })
  }
}
