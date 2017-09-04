import { config } from '../config';
import * as express_ from 'express';
import * as session_ from 'cookie-session';
import * as cookieParser_ from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as methodOverride_ from 'method-override';

const express = express_;
const cookieParser = cookieParser_;
const methodOverride = methodOverride_;
const session = session_;

export const basics = express();

basics.disable('x-powered-by');
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