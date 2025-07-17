import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FontAwesomeModule
  ]
})
export class ServiciosModule { }
