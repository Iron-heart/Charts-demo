import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxPageComponent } from './pages/dx-page/dx-page.component';
import { NgApexchartsComponent } from './pages/ng-apexcharts/ng-apexcharts.component';
import { NgxChartsComponent } from './pages/ngx-charts/ngx-charts.component';
import { NgxEchartsComponent } from './pages/ngx-echarts/ngx-echarts.component';
import { SynchFusionComponent } from './pages/synch-fusion/synch-fusion.component';

const routes: Routes = [
  { path:"dx-page", component: DxPageComponent },
  { path: "ngx-charts", component: NgxChartsComponent },
  { path: "ngx-echarts", component: NgxEchartsComponent },
  { path: "ng-apexcharts", component: NgApexchartsComponent },
  { path: "synchfusion", component: SynchFusionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
