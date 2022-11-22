import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPoints',
})
export class SortByPointsPipe implements PipeTransform {
  transform(teams: any[]): any[] {
    teams.sort((teamA, teamB) => {
      const scoreA = teamA.wins * 2 + teamA.ties;
      const scoreB = teamB.wins * 2 + teamB.ties;

      return scoreA > scoreB ? -1 : 1;
    });
    return teams;
  }
}
