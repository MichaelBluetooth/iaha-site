import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SponsorsPanelComponent } from './components/sponsors-panel/sponsors-panel.component';
import { FeaturedPanelComponent } from './components/featured-panel/featured-panel.component';
import { StandingsPanelComponent } from './components/standings-panel/standings-panel.component';
import { CommunityPanelComponent } from './components/community-panel/community-panel.component';
import { SchedulePanelComponent } from './components/schedule-panel/schedule-panel.component';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SponsorsPanelComponent,
    FeaturedPanelComponent,
    StandingsPanelComponent,
    CommunityPanelComponent,
    SchedulePanelComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
