import SPONSORS from '../assets/2022-23_Season/data/sponsors.json';
import STANDINGS from '../assets/2022-23_Season/data/standings.json';
import BOARD_MEMBERS from '../assets/2022-23_Season/data/board-members.json';
import SCHEDULE from '../assets/2022-23_Season/data/schedule.json';

import { Sponsor } from './core/models/sponsor';
import { Team } from './core/models/team';
import { BoardMember } from './core/models/board-member';
import { ScheduledGame } from './core/models/scheduled-game';

const SPONSORS_LIST: Sponsor[] = SPONSORS.sponsors as Sponsor[];
const STANDINGS_LIST: Team[] = STANDINGS.teams;
const BOARD_MEMBERS_LIST: BoardMember[] = BOARD_MEMBERS.members as BoardMember[];
const SCHEDULED_GAMES: ScheduledGame[] = SCHEDULE.games as ScheduledGame[];

export { SPONSORS_LIST, STANDINGS_LIST, BOARD_MEMBERS_LIST, SCHEDULED_GAMES };

