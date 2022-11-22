import { Component } from '@angular/core';
import { BOARD_MEMBERS_LIST } from 'src/app/app-data';
import { BoardMember } from 'src/app/core/models/board-member';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent {
  boardMembers: BoardMember[] = BOARD_MEMBERS_LIST;
}
