import * as express_ from 'express';
import { Request, Response } from 'express';
const express = express_;

export const login = express();
login.get('/login', (req: Request, res: Response) => {
  res.statusCode = 401;
  res.end(`
    <html lang="en">
    <head>
    <style>
      html, body, div, span, h1, p, a, img {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: 1em "Open Sans", sans-serif;
        font-family: system, -apple-system, 'San Francisco', '.SFNSDisplay-Regular', 'Segoe UI', Segoe, 'Segoe WP', 'Helvetica Neue', helvetica, 'Lucida Grande', arial, sans-serif;
        vertical-align: baseline;
      }
      body {
        width: 100%;
      }
      h1 {
        font-size: 1.5em;
        margin-bottom: 20px;
      }
      .wrapper {
        width: 236px;
        padding: 20px;
        margin: 20px auto;
        border: 1px lightgray solid;
        border-radius: 10px;
      }
      .login {
        margin-top: 20px;
        width: 236px;
        height: 44px;
      }
    </style>
    </head>
    </body>
      <div class="wrapper">
        <h1>Football Graphql</h1>
        <p>
          In order to use Football Graphql you need to login with Yahoo!
        </p>
        <a href="/auth">
          <img class="login"  src="https://football-assets.markis.codes/images/yahoo-sign-in.png" alt="Sign in with Yahoo" />
        </a>
      </div>
    </body>
    </html>
  `.replace(/\s+/g, ' '));
});