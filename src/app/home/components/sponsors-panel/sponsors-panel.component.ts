import { Component } from '@angular/core';
import { SPONSORS_LIST } from 'src/app/app-data';
import { Sponsor } from 'src/app/core/models/sponsor';

@Component({
  selector: 'app-sponsors-panel',
  templateUrl: './sponsors-panel.component.html',
  styleUrls: ['./sponsors-panel.component.less'],
})
export class SponsorsPanelComponent {
  sponsors: Sponsor[] = SPONSORS_LIST;
}
