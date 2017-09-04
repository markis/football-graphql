import { nflClient } from '../clients/nflClient';
import { stats } from './stats';
import { FootballPlayerSeasonStatParams, PlayerParams, Player, PlayingPosition, FootballPlayerSeasonStat } from '@markis/stattleship';
import * as DataLoader from 'dataloader';

interface Name {
  first: string;
  last: string;
}

type PlayerExt = Player & {
  position?: PlayingPosition;
  stats?: Promise<FootballPlayerSeasonStat>;
}

export const player = (name: Name) =>
  playerLoader.load(name.last ?
    nflClient.createPlayerKey(name.first, name.last) :
    nflClient.createPlayerKey(name.first)
  );

export const playerLoader = new DataLoader((names: string[]) => Promise.all(
  names.map(name =>
    nflClient.players({
      player_id: name,
      per_page: 1
    })
    .then(data => {
      const player: PlayerExt = data && data.players && data.players[0] || {};
      const position = data && data.playing_positions && 
                        data.playing_positions.find(p => p.id == player.playing_position_id)
      const names = player.name.split(' ');
      const name = {
        first: names.shift() || '',
        last: names.join(' ')
      }

      player.position = position;
      player.stats = stats(name);
      return player;
    })
    .catch(err => err)
  )
));