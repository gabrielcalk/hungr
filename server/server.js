// reqire path, express, dotenv
const path = require("path");
const express = require("express");
require('dotenv').config();
const fetch = require('node-fetch');

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

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
// location, type of food price information from api call
app.get('/api/place/', async (req, res)=>{
  const location = req.query.location
  const cuisine = req.query.cuisine
  const price = req.query.price

  try{
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=50000&type=restaurant&keyword=${cuisine}&maxprice=${price}&key=${process.env.API_KEY_ID}`)
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
  .catch(err => console.log(err))

  }catch(e){
    console.log(e)
  }
});

app.get('/api/image/', async (req, res)=>{
  const photo_reference = req.query.photo_reference

  try{
    fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=${process.env.API_KEY_ID}`)
    .then(response => response)
    .then(data => {
      res.json(data.url)
    })
  .catch(err => console.log(err))

  }catch(e){
    console.log(e)
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});