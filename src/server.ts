import { basics } from './express/basic';
import { oauth, ensureAuthenticated } from './express/oauth';
import * as resolvers from './resolvers/index';
import { schema } from './schema';
import * as express_ from 'express';
import * as graphqlHTTP_ from 'express-graphql';
const express = express_;
const graphqlHTTP = graphqlHTTP_;

const app = express();
app.use(basics, oauth);
app.get('/login', (req, res) => {
  res.end('<a href="/auth">Login</a>');
});

app.use('/', ensureAuthenticated, graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(8080);
console.log('Running a GraphQL API server at localhost:8080/graphql');