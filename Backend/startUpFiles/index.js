const routes = require('./routes');
const db = require('./db'); 
const cors = require('./cors'); 
const server = require('./server'); 

module.exports = {
  routes,
  db,
  cors,
  server
};