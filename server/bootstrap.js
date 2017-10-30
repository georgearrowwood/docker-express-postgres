const Express = require('express');
const bodyParser = require('body-parser');

const logger = require('./modules/logger');
const appRoutes = require('./routes/app');
// const authRoutes = require('./routes/auth');

const server = Express();

server
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  // .use('/', authRoutes)
  .use('/', appRoutes)
  .use((req, res) => {
    res.send(404);
  })
  // error handler
  .use((err, req, res) => {
    logger.info(err);
    res.send(500);
  });

module.exports = server;
