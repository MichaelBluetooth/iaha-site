import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './components/standings/standings.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    StandingsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    StandingsRoutingModule
  ]
})
export class StandingsModule { }
