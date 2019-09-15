const admin = require('firebase-admin');
const serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://borboleta-d013b.firebaseio.com"
});
module.exports = {admin};
