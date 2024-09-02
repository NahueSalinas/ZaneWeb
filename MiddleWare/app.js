const Fastify = require('fastify');
const fastify = Fastify({ logger: true });

fastify.register(require('./scr/Router'), { prefix: '/' });

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
