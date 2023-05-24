const { ObjectId } = require("mongodb");
const db = require("../config/mongodb");

const index = (req, res) => {
  db.collection("produk")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const view = (req, res) => {
  const id = req.params.id;
  const cari = new ObjectId(id);
  db.collection("produk")
    .findOne({ _id: cari })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const tambahProduk = (req, res) => {
  const { nama, price, stok, status } = req.body;
  db.collection("produk")
    .insertOne({ nama, price, stok, status })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const updateProduk = (req, res) => {
  const id = req.params.id;
  const cari = new ObjectId(id);
  const { nama, price, stok, status } = req.body;
  db.collection("produk")
    .updateOne({ _id: cari }, { $set: { nama, price, stok, status } })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const deleteProduk = (req, res) => {
  const id = req.params.id;
  const cari = new ObjectId(id);
  db.collection("produk")
    .deleteOne({ _id: cari })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports = {
  index,
  view,
  tambahProduk,
  updateProduk,
  deleteProduk,
};
