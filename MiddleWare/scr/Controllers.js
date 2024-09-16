const Models = require('./Models');
exports.LoggedIn = async (request, reply) => {
    const data = request.body;
    console.log(data);
    const modelResponse = await Models.logIn(data.email, data.password);

    return reply.status(modelResponse.statusCode).send({
        message: modelResponse.message,
        data: modelResponse.data || null,
        error: modelResponse.error || null
    });
};

exports.GetReviews = async (request, reply) => {
    const result = await Models.reviews();
    return reply.status(result.statusCode).send({
        message: result.message,
        data: result.data || null,
        error: result.error || null
    });
};

exports.SingUp = async (request, reply) => {
    const { email, password } = request.body;

    const modelResponse = await Models.SingUp(email, password);

    return reply.status(modelResponse.statusCode).send({
        message: modelResponse.message,
        data: modelResponse.data || null,
        error: modelResponse.error || null
    });
};

exports.UserCounter = async (request, reply) => {
    const result = await Models.UserCounter();
    return reply.status(result.statusCode).send({
        message: result.message,
        data: result.data || null,
        error: result.error || null
    });
};

exports.PostReviews = async (request, reply) => {
    const data = request.body;
    const result = await Models.PostReviews(data);
    return reply.status(result.statusCode).send({
        message: result.message,
        data: result.data || null,
        error: result.error || null
    });

};