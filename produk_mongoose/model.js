const mongoose = require("mongoose");

const produkSkema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, "tidak boleh kosong"],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 1000,
    max: 10000000,
  },
  stok: Number,
  status: {
    type: Boolean,
    default: true,
  },
});
const DbProduk = mongoose.model("daftar-laptop", produkSkema);
module.exports = DbProduk;
