import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/sevices/data.service';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';

@Component({
  selector: 'app-ngx-echarts',
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.css']
})
export class NgxEchartsComponent implements OnInit {

  options: any;
  dataAxis: string[] = [];
  data: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.dataAxis = res.map(item => item.Date);
      this.data = res.map(item => item.Open);

      const yMax = 500;
      const dataShadow = [];
  
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.data.length; i++) {
        dataShadow.push(yMax);
      }
  
      this.options = {
        title: {
          text: 'Check Console for Events',
        },
        xAxis: {
          data: this.dataAxis,
          axisLabel: {
            inside: true,
            color: '#fff',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#999',
            },
          },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            // For shadow
            type: 'bar',
            itemStyle: {
              color: 'rgba(0,0,0,0.05)'
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false,
          },
          {
            type: 'bar',
            itemStyle: {
              color: new LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' },
                ]),
              }
            },
            data: this.data,
          },
        ],
      };
    });
    
  }

  onChartEvent(event: any, type: string) {
    // console.log('chart event:', type, event);
  }

}
