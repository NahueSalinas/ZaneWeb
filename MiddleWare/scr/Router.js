

fastify.get('/', (request, reply) => {
    return { message: `Hello, world! ${request.customProperty}` };
  });