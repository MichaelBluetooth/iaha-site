import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPointsPipe } from './pipes/sort-by-points.pipe';
import { GroupGamesByDayPipe } from './pipes/group-games-by-day.pipe';
import { TeamLogoPipe } from './pipes/team-logo.pipe';
import { IsTodayPipe } from './pipes/is-today.pipe';



@NgModule({
  declarations: [SortByPointsPipe, GroupGamesByDayPipe, TeamLogoPipe, IsTodayPipe],
  exports: [SortByPointsPipe, GroupGamesByDayPipe, TeamLogoPipe, IsTodayPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
