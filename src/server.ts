import 'newrelic';
import { basics } from './express/basic';
import { oauth, ensureAuthenticated } from './express/oauth';
import { login } from './express/login';
import * as resolvers from './resolvers/index';
import { schema } from './schema';
import express from 'express';
import { Request, Response } from 'express';
import graphqlHTTP from 'express-graphql';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(basics, oauth, login);

app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(PORT)
console.log(`Running a GraphQL API server at localhost:${PORT}`);