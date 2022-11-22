import { Component } from '@angular/core';
import { SPONSORS_LIST } from 'src/app/app-data';
import { Sponsor } from 'src/app/core/models/sponsor';

@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.less'],
})
export class SponsorsListComponent {
  sponsors: Sponsor[] = SPONSORS_LIST;
}
