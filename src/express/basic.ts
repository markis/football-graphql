import { config } from '../config';
import * as express_ from 'express';
import * as cors_ from 'cors';
import * as session_ from 'cookie-session';
import * as cookieParser_ from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as methodOverride_ from 'method-override';

const express = express_;
const cors = cors_;
const cookieParser = cookieParser_;
const methodOverride = methodOverride_;
const session = session_;

export const basics = express();

basics.disable('x-powered-by');
basics.options('*', cors())
basics.use(cors());
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