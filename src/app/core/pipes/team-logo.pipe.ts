import { Pipe, PipeTransform } from '@angular/core';
import { STANDINGS_LIST } from 'src/app/app-data';
import { Team } from '../models/team';

@Pipe({
  name: 'teamLogo',
})
export class TeamLogoPipe implements PipeTransform {
  teams: Team[] = STANDINGS_LIST;


  transform(teamName: string): string {
    const matched = this.teams.find((t) => {
      return t.name.toLowerCase() === teamName.toLowerCase();
    });
    return matched ? matched.logo : '';
  }
}
