import { config } from '../config';
import express from 'express';
import cors from 'cors';
import session from 'cookie-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

export const basics = express();

basics.disable('x-powered-by');
basics.use(cors({
  origin: true,
  credentials: true
}));
basics.use(cookieParser());
basics.use(bodyParser.urlencoded({
  extended: false
}));
basics.use(bodyParser.json());
basics.use(methodOverride());
basics.use(session({
  name: 'token',
  secret: config.yahooClientSecret(),
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: true,
    domain: config.domain(),
    path: '/',
    expires: new Date(Date.now() + 60 * 60 * 1000)
  }
}));

basics.get("/favicon.ico", function(req, res) {
 res.redirect('https://football-assets.markis.codes/images/icon.png')
});