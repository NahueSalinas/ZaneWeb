const Controller = require('./Controllers');

async function userRoutes(fastify, options) {
  fastify.get('/UserCounter', Controller.UserCounter);
  fastify.get('/GetReviews', Controller.GetReviews);
  fastify.post('/SingUp', Controller.SingUp);
  fastify.post('/LoggedIn', Controller.LoggedIn);
  fastify.post('/PostReviews', Controller.PostReviews); 

}

module.exports = userRoutes;