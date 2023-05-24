const { MongoClient } = require("mongodb");

const url = "mongodb://akbar:123456@127.0.0.1:27017?authSource=admin";
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log("berhasil");
  } catch (e) {
    console.log(e);
  }
})();
const db = client.db("produkV3");

module.exports = db;
