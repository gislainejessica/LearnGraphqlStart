const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebaseConfig = require('./config');
// functions.config().firebase
admin.initializeApp(firebaseConfig);

module.exports = {admin}