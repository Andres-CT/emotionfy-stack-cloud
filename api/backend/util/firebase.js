const admin = require('firebase-admin');
const { FIREBASE_CONFIG, FIREBASE_DATABASE_URL } = require('../config/secrets');

module.exports = admin.initializeApp({
	credential: admin.credential.cert(FIREBASE_CONFIG),
	databaseURL: FIREBASE_DATABASE_URL
});
