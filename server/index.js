const logger = require('./modules/logger');
const server = require('./bootstrap');

const port = process.env.PORT;

server.listen(port, () => {
  logger.info(`Server is listening at ${port}`);
});
