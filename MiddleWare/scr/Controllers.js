const { User, Review } = require('./Models'); 
exports.LoggedIn = async (request, reply) => {
    try {
        // Implement your login logic here
        // Typically involves checking credentials and creating a session or JWT
        const { email, password } = request.body;
        const user = await User.findOne({ where: { email } });

        if (!user || user.password !== password) { // Simplistic check, consider hashing passwords
            return reply.status(401).send({ message: 'Invalid credentials' });
        }
        reply.send({ message: 'Logged in successfully' });
    } catch (error) {
        console.error(error);
        reply.status(500).send({ error: 'Error logging in', details: error.message });
    }
};

exports.GetReviews = async (request, reply) => {
    try {
        const reviews = await Review.findAll();
        reply.send(reviews);
    } catch (error) {
        console.error(error);
        reply.status(500).send({ error: 'Error fetching reviews', details: error.message });
    }
};

exports.SingUp = async (request, reply) => {
    try {
        const { username, email, password } = request.body;
        const userFound = await User.findOne({ where: { email } });
        if (userFound) {
            return reply.status(409).send({ message: 'Email already used' });
        }
        const user = await User.create({ username, email, password });
        reply.status(201).send(user);
    } catch (error) {
        console.error(error);
        reply.status(500).send({ error: 'Error creating user', details: error.message });
    }
};

exports.UserCounter = async (request, reply) => {
    try {
        const userCount = await User.count();
        reply.send({ count: userCount });
    } catch (error) {
        console.error(error);
        reply.status(500).send({ error: 'Error fetching user count', details: error.message });
    }
};

exports.PostReviews = async (request, reply) => {
    try {
        const { title, content, userId } = request.body;
        
        // Ensure user exists before creating a review
        const user = await User.findByPk(userId);
        if (!user) {
            return reply.status(404).send({ message: 'User not found' });
        }

        const review = await Review.create({ title, content, userId });
        reply.status(201).send(review);
    } catch (error) {
        console.error(error);
        reply.status(500).send({ error: 'Error posting review', details: error.message });
    }
};