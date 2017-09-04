import { YahooClient } from '../clients/yahooClient';
import { myroster } from './myroster';

export function myteams(args: any, context: any) {
  return new YahooClient(context.user)
    .getMyTeam('nfl').then(data => {
      const teams = [];
      for (const gameTeams of data.teams) {
        for (const team of gameTeams.teams) {
          teams.push({
            id: team.team_key,
            name: team.name,
            logo: team.team_logos[0].url,
            roster: (args: any, context: any) =>
              myroster({ id: team.team_key }, context)
          });
        }
      }
      return teams;
    })
    .catch(err => err);
}