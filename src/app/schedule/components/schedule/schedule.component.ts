import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SCHEDULED_GAMES } from 'src/app/app-data';
import { ScheduledGame } from 'src/app/core/models/scheduled-game';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent {
  games: ScheduledGame[] = SCHEDULED_GAMES;

  constructor(private datePipe: DatePipe){}

  ngAfterViewInit(){
    setTimeout(() => {
      const today = this.datePipe.transform(new Date(), 'fullDate') || '';
      const yOffset = -10; 
      const element = document.getElementById(today);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;    
      window.scrollTo({top: y, behavior: 'smooth'});
    }, 250)
  }
}
