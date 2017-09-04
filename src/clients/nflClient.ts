import { config } from '../config';
import { NFLClient } from '@markis/stattleship';

export const nflClient = new NFLClient(config.stattleshipToken());