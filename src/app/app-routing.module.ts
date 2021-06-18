import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxPageComponent } from './pages/dx-page/dx-page.component';

const routes: Routes = [
  { path:"dx-page", component: DxPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
