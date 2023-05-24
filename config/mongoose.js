const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://akbar:123456@127.0.0.1:27017/produk-mongoose?authSource=admin"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "gagal terhubung"));
db.once("open", () => console.log("berhasil terhubung"));
