import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FantasyRoutingModule } from './fantasy-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FantasyRoutingModule
  ]
})
export class FantasyModule { }
