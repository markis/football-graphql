import { YahooClient } from '../clients/yahooClient';
import { player } from './player';

export function myroster(args: any, context: any) {
  return new YahooClient(context.user)
    .getRoster(args.id)
    .then(data => {
      const roster: any[] = data.roster || [];
      return Promise.all(
        roster.map(r => player(r.name))
      );
    })
    .catch(err => err);
}