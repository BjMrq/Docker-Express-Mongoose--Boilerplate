require('./database');
const { appName, server } = require('./config');
const { app } = require('./server');


// Start the app
app.listen(server.port, () => {

  console.log(`🛩  ${appName} is listening on port ${server.port}, let's play!`);

});
