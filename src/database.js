const mongoose = require('mongoose');

const {
  dbHost, dbPort, dbUser, dbPassword
} = require('./config');

const connectionUrl = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}`;

(async () => {

  try {

    await mongoose.connect(connectionUrl, {
      useNewUrlParser   : true,
      useCreateIndex    : true,
      useUnifiedTopology: true,
      useFindAndModify  : false
    });

  } catch (e) {

    console.log('Could not connect to the db: ', e);

  }

})();
