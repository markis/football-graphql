import * as conf from 'config';

export class config {
  public static domain() : string {
    return conf.get('domain');
  }
    
  public static yahooClientSecret() : string {
    return conf.get('yahoo.client_secret');
  }

  public static yahooClientId() : string {
    return conf.get('yahoo.client_id');
  }
  
  public static stattleshipToken() : string {
    return conf.get('stattleship.token');
  }
}