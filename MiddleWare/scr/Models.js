const db = require('../firestone'); 


async function reviews() {
  try {
    const snapshot = await db.collection('Users').get();
    const reviews = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if(reviews.empty()){
      return { statusCode: 404, message: 'No reviews...'};
    }

    return { statusCode: 200, message: 'Got reviews successfully', data: reviews };
  } catch (error) {
    return { statusCode: 500, message: 'Failed to get reviews :(', error: error.message };
  }
}
async function UserCounter() {
  try {
    const snapshot = await db.collection('Users').get();
    let count = snapshot.size;
    count -= 1;
    return { statusCode: 200, message: 'Got UserCounter successfully', data: count };
  } catch (error) {
    return { statusCode: 500, message: 'Failed to get UserCounter', error: error.message };
  }
}
async function PostReviews(data) {
  try {
    const querySnapshot = await db.collection('Users').where('Email', '==', data.Email).get();
    if (querySnapshot.empty) {
      return { statusCode: 404, message: 'Email not found' };
    }
    querySnapshot.forEach(async (doc) => {
      await doc.ref.update(data);
    });

    return { statusCode: 200, message: 'Posted reviews successfully', data: data };
  } catch (error) {
    return { statusCode: 500, message: 'Failed to post reviews', error: error.message };
  }
}
async function SingUp(email, password) {
  try {
    const userSnapshot = await db.collection('Users').where('Email', '==', email).get();
    if (!userSnapshot.empty) {
      return { statusCode: 400, message: 'User already exists' };
    }

    const newUser = { Email: email, Password: password }; //Hash
    const userRef = await db.collection('Users').add(newUser);

    return { statusCode: 201, message: 'User registered successfully', data: { id: userRef.id, email } };
  } catch (error) {
    return { statusCode: 500, message: 'Failed to register user', error: error.message };
  }
}
async function logIn(email, password) {
  try {
    const userSnapshot = await db.collection('Users').where('Email', '==', email).get();

    if (userSnapshot.empty) {
      return { statusCode: 404, message: 'User not found' };
    }

    const user = userSnapshot.docs[0].data();
    console.log(user);
    if (user.Password !== password) {
      return { statusCode: 401, message: 'Invalid password' };
    }

    return { statusCode: 200, message: 'Login successful', data: { email: email } };
  } catch (error) {
    return { statusCode: 500, message: 'Failed to log in', error: error.message };
  }
}
module.exports = {
  reviews,
  UserCounter,
  PostReviews,
  SingUp,
  logIn
};
