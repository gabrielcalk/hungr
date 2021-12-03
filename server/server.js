const path = require("path");
const express = require("express");
require('dotenv').config();
// const compression = require('compression');
// const sequelize = require('./config/connections');
// const models = require('./models/index');
// const routes = require('./controllers');

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connectionsMongo');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');


const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// app.use(routes);

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});