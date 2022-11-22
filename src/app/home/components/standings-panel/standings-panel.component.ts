import { Component } from '@angular/core';
import { Team } from 'src/app/core/models/team';
import { STANDINGS_LIST } from 'src/app/app-data';

@Component({
  selector: 'app-standings-panel',
  templateUrl: './standings-panel.component.html',
  styleUrls: ['./standings-panel.component.less'],
})
export class StandingsPanelComponent {
  teams: Team[] = STANDINGS_LIST;
}
