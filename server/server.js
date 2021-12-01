const path = require("path");
const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.use(routes);
  
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });