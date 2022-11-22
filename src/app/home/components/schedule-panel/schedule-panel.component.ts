import { Component, OnInit } from '@angular/core';
import { SCHEDULED_GAMES } from 'src/app/app-data';

@Component({
  selector: 'app-schedule-panel',
  templateUrl: './schedule-panel.component.html',
  styleUrls: ['./schedule-panel.component.less']
})
export class SchedulePanelComponent implements OnInit {

  today = new Date();
  todaysGames = SCHEDULED_GAMES.filter(g => new Date(g.date).toDateString() == this.today.toDateString());

  constructor() { }

  ngOnInit(): void {
  }

}
