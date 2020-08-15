'use strict'
// This microservice is used to log all kind of interest information.
// The service is requested to get data or to store data.
// The data could be stored into a DB or into the FS



var server    = require('./middlewares.js').app;
const port    = process.env.PORT || 3004;
const storage = process.env.STORAGE_METHOD || 'FS';


if ( storage === 'FS') {
  // Accessing to the middlewares without BD connection.
  console.log('[*] Starting Logger service with FS storage');
  connect(server, port);
} else if ( storage === 'BD') {
  // Accessing to the middlewares with the DB connection
  console.log('[*] Starting Logger service with DB storage. Connecting to MongoDB...');



} else {
  // No storage method specified! Quitting

  console.error('[!] No storage method selected!.');
  return;
}


function connect(server, port) {
  server.listen(port, () => {
    console.log('[*] Logger service is up and running!');
    console.log(`[*] Server running on: http://localhost:${port}`);
  })
}
