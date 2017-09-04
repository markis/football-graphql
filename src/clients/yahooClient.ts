import { config } from '../config';
import { User } from '../interfaces/User';
import * as YahooFantasy from 'yahoo-fantasy';

type YahooFantasy = typeof YahooFantasy;

export class YahooClient {
  private yf: YahooFantasy;

  constructor(user: User) {
    const token = user.token
    const clientId = config.yahooClientId()
    const clientSecret = config.yahooClientSecret()
    this.yf = new YahooFantasy(clientId, clientSecret);
    this.yf.setUserToken(token);
  }

  public getRoster(id: string): Promise<any | Error> {
    return new Promise((resolve, reject) => 
      this.yf.roster.players(id, 
        (err: any, data: any) => 
          err ? reject(err) : resolve(data)
      )
    )
  }
  
  public getMyTeam(league: string): Promise<any | Error> {
    return new Promise((resolve, reject) => 
      this.yf.user.game_teams(league,
        (err: any, data: any) => 
          err ? reject(err) : resolve(data)
      )
    )
  }
}
