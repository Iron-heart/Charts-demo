import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DxPageComponent } from './pages/dx-page/dx-page.component'
import { DxChartModule } from 'devextreme-angular';
import { NgxChartsComponent } from './pages/ngx-charts/ngx-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DxRangeSelectorModule } from 'devextreme-angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxEchartsComponent } from './pages/ngx-echarts/ngx-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgApexchartsComponent } from './pages/ng-apexcharts/ng-apexcharts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DxPageComponent,
    NgxChartsComponent,
    NgxEchartsComponent,
    NgApexchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxChartModule,
    DxRangeSelectorModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgApexchartsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }