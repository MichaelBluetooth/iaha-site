import { Component } from '@angular/core';
import { STANDINGS_LIST } from 'src/app/app-data';
import { Team } from 'src/app/core/models/team';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.less'],
})
export class StandingsComponent {
  teams: Team[] = STANDINGS_LIST;
}
