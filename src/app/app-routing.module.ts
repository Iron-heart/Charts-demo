import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxPageComponent } from './pages/dx-page/dx-page.component';
import { NgxChartsComponent } from './pages/ngx-charts/ngx-charts.component';

const routes: Routes = [
  { path:"dx-page", component: DxPageComponent },
  { path: "ngx-charts", component: NgxChartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
