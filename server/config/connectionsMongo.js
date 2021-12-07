const mongoose = require('mongoose');
//preperation for deployment
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/hungr_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;