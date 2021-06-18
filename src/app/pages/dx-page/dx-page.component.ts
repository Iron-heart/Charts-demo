import { Component, OnInit, ViewChild } from '@angular/core';
import { DxChartComponent } from 'devextreme-angular';
import { DataService } from 'src/app/sevices/data.service';
import { StockPrice } from 'src/app/StockPrice';


@Component({
  selector: 'app-dx-page',
  templateUrl: './dx-page.component.html',
  styleUrls: ['./dx-page.component.css']
})
export class DxPageComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart!: DxChartComponent;

  stockPrices!: StockPrice[];
  visualRange: any = {};


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      this.stockPrices = res
    })
  }

}
