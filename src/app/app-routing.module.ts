import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxPageComponent } from './pages/dx-page/dx-page.component';
import { NgApexchartsComponent } from './pages/ng-apexcharts/ng-apexcharts.component';
import { NgxChartsComponent } from './pages/ngx-charts/ngx-charts.component';
import { NgxEchartsComponent } from './pages/ngx-echarts/ngx-echarts.component';

const routes: Routes = [
  { path:"dx-page", component: DxPageComponent },
  { path: "ngx-charts", component: NgxChartsComponent },
  { path: "ngx-echarts", component: NgxEchartsComponent },
  { path: "ng-apexcharts", component: NgApexchartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
