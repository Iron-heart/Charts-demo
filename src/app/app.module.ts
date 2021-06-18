import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxRangeSelectorModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DxPageComponent } from './pages/dx-page/dx-page.component'
import { DxChartModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DxPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxChartModule,
    DxRangeSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
