import { nflClient } from '../clients/nflClient';
import { FootballPlayerSeasonStatParams } from '@markis/stattleship';
import * as DataLoader from 'dataloader';

export interface Name {
  first: string;
  last: string;
}

export const stats = (name: Name) =>
  statsLoader.load(name.last ?
    nflClient.createPlayerKey(name.first, name.last) :
    nflClient.createPlayerKey(name.first)
  );

export const statsLoader = new DataLoader((names: string[]) => Promise.all(
  names.map(name =>
    nflClient.playerSeasonStats({
      on: new Date().toISOString(),
      player_id: name,
      per_page: 1
    })
    .then((player) => {
      const stats = player && player.player_season_stats || []
      return stats.reverse()[0] || {}
    })
    .catch(err => err)
  )
));
