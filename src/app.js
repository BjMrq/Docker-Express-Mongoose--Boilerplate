require('./config/database');
const { appName, server } = require('./config/variables');
const { app } = require('./config/server');


// Start the app
app.listen(server.port, () => {

  console.log(`🛩  ${appName} is listening on port ${server.port}, let's play!`);

});
