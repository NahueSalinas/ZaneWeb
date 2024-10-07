const admin = require('firebase-admin');
const serviceAccount = require('./zane-66b0e-firebase-adminsdk-mzke4-37e9af9e09.json'); // Adjust the path

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://zane-66b0e.firebaseio.com" // Replace with your project ID
});

// Get a reference to Firestore
const db = admin.firestore();

module.exports = db;