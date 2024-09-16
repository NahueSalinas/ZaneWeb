const Fastify = require('fastify');
const fastify = Fastify({ logger: true });

fastify.register(require('./scr/Router'), { prefix: '/' });

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server listening at ${address}`);
});
