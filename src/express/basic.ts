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

// favicon
const favicon = new Buffer('AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXPaAFlz2gxZc9l1V27X5lBU0udOT9J2T1HUDU9R1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZaToAGq07RFaetqVWHHX+FZs1v9PUdH/Tk3R+FBZ1ZZbnegSWIrjAAAAAAAAAAAAAAAAAAAAAAAAAAAAZJ/mAGGT4wpy1fWWbsfx/Wiv6f9joeX/WI3i/1iX5P9ds+z9X8Pxl1Z53wpXheIAAAAAAAAAAAAAAAAAWXTbAFl52ABZdNlkXovf+Geu6f9tw+//bMjx/1+57v9cruv/WJbk/1Jt2fhPUtNlT1fRAFBS1gAAAAAAAAAAAFlz2QBZc9oYWHLYzlhx1/9Ycdf/WHPX/1hy1/9QWNP/TlDR/05O0f9OTdH/Tk/Sz09R1BlPUdQAAAAAAE9o3QBYctgAWXPZV1hy1/pYctf/WXXY/2Si5f9mrOn/Wprl/1aG4P9PU9L/Tk/R/05P0ftPUNNYTk/SAEVUxwBZctoAVG3LAFhz2JJYctf/WHLX/1l02P9hluL/Yp3k/1iJ4P9Uedz/TlLS/05P0f9OT9H/T1DSk0hDxABQU9MAWXPaAFp03AVYctiyWHLX/1hy1/9Zddj/Y5vj/2Sk5v9ZkOL/VX/e/05S0v9OT9H/Tk/R/05Q0rNRU9UFUFLTAFlz2gBadNwFWHLYslhy1/9Yctf/WXXY/2Ob4/9kpOb/WZDi/1V/3v9OUtL/Tk/R/05P0f9OUNKzUFTVBVBS0wBZctoAVG3MAFhz2JJYctf/WHLX/1l02P9hluL/Yp3k/1iJ4P9Uedz/TlLS/05P0f9OT9H/T1DSlEZCwQBRVNUAT2fdAFhz2ABZc9lXWHLX+lhy1/9Zddj/ZKLl/2as6f9amuX/Vobg/09T0v9OT9H/Tk/R+09Q01lOT9IAUFPRAAAAAABZc9kAWXPaGFhy2M5Ycdf/WHHX/1hz1/9Yctf/UFjT/05Q0f9OTtH/Tk3R/05P0tBPUdQaT1HUAAAAAAAAAAAAWnTbAFl52ABZdNlkXovf+Geu6f9tw+//bMjx/1+57v9cruv/WJbk/1Jt2flPUtNoTljRAFBT1gAAAAAAAAAAAAAAAABkn+YAYZPjCnLV9ZZux/H9aK/p/2Oh5f9YjeL/WJfk/1yz7P5fw/GbVnzfC1eH4gAAAAAAAAAAAAAAAAAAAAAAAAAAAGWk6ABqtO0RWnralVhx1/hWbNb/T1HR/05N0flQWdWbW5voFFeH4gCb//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXPaAFlz2gxZc9l1V27X5lBU0uhOT9J6T1DUDk9R0wAAAAAAAAAAAAAAAAAAAAAA+B8AAPAPAADgBwAA4AcAAMADAADAAwAAwAMAAIABAACAAQAAwAMAAMADAADAAwAA4AcAAOAHAADwDwAA+B8AAA==', 'base64'); 
basics.get("/favicon.ico", function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Length', favicon.length);
 res.setHeader('Content-Type', 'image/x-icon');
 res.setHeader("Cache-Control", "public, max-age=2592000");
 res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
 res.end(favicon);
});