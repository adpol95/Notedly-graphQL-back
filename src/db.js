const mongoose = require('mongoose');

module.exports = {
  connect: DB_HOST => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('createIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(DB_HOST);
    mongoose.connection.on('error', err => {
      console.log(err);
      console.log(
        'MongoDB connection error. Please make sure MongoDB is running.'
      );
      process.exit();
    });
    mongoose.connection.once('open', () => {
      console.log("CONNECTION TO REMOTE DATABASE MONGODB IS ESTABLISHED");
    });
  },
  close: () => {
    mongoose.connection.close();
  }

};
