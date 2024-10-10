const Fastify = require('fastify');
const fastify = Fastify({ logger: true });

// Registrar el plugin @fastify/cors sin límites
fastify.register(require('@fastify/cors'), {
    origin: '*', // Permitir todas las solicitudes CORS
});

fastify.register(require('./scr/Router'), { prefix: '/' });

fastify.listen({ port: 8000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server listening at ${address}`);
});
