import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendenciasComponent } from './tendencias.component';

const routes: Routes = [{ path: '', component: TendenciasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TendenciasRoutingModule { }
