const db = require('mongoose');
let mongoUrl;

async function DbConnect({ mongo: { url } }) {
  mongoUrl = url;

  try {
    await db.connect(mongoUrl);
  } catch (error) {
    setTimeout(DbConnect, 8000);
  }
}

const dbConnection = db.connection;

function DbDisconnect() {
  dbConnection.removeAllListeners();
  return db.disconnect();
}

module.exports = {
  DbConnect,
  DbDisconnect,
};
