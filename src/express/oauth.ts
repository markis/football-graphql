import { config } from '../config';
import { User } from '../interfaces/User';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import pass from 'passport';
import { Strategy } from 'passport-oauth2';
import refresh from 'passport-oauth2-refresh';

export const oauth = express();
export const passport = pass;

const authStrategy = new Strategy({
    authorizationURL: 'https://api.login.yahoo.com/oauth2/request_auth',
    tokenURL: 'https://api.login.yahoo.com/oauth2/get_token',

    clientID: config.yahooClientId(),
    clientSecret: config.yahooClientSecret(),
    callbackURL: config.domain() + '/auth/callback'
  },
  function(token: string, refreshToken: string, user: User, done: any) {
    updateUser(user, token, refreshToken);
    done(null, user)
  });

passport.serializeUser((user: User, done: any) => done(null, user));
passport.deserializeUser((user: User, done: any) => done(null, user));
passport.use(authStrategy);
refresh.use(authStrategy);

oauth.use(passport.initialize());
oauth.use(passport.session());  
oauth.get('/auth', 
  passport.authenticate('oauth2', { failureRedirect: '/login' })
);
oauth.get('/auth/callback', 
  passport.authenticate('oauth2'), 
  (req, res) => res.redirect('/')
);

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const user: User = req.user || {};
  const refreshToken = user.refresh;
  const expired = userExpired(req.user);
  if (req.isAuthenticated() && !expired) {
    return next();
  } else if (expired && refreshToken) {
    refresh.requestNewAccessToken('oauth2', refreshToken, null, 
      (_: any, token: string, refreshToken: string, results: any) => {
        const session = req.session;
        if (session) {
          const user: User = session && session.passport && session.passport.user || {};
          updateUser(user, token, refreshToken);
          session.save(err => console.error(err));
        }
        return next();
      })
  } else {
    res.redirect('/login')
  }
}

function updateUser(user: User, token: string, refreshToken: string): User {
  user.token = token;
  user.refresh = refreshToken;
  user.expire = new Date();
  user.expire.setTime(user.expire.getTime() + (55*60*1000));
  return user;
}

function userExpired(user: User) {
  if (!(user && user.expire)) {
    return true
  }
  const expire = typeof user.expire === 'string' ?
                    new Date(Date.parse(user.expire)) :
                    user.expire;

  const now = new Date();
  return expire < now;
}
