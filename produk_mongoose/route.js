const route = require("express").Router();
const produk = require("./model");

route.post("/produk", (req, res) => {
  const { nama, price, stok, status } = req.body;
  produk
    .create({ nama, price, stok, status })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});
route.get("/produk", (req, res) => {
  produk
    .find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});
route.get("/produk/:id", (req, res) => {
  const id = req.params.id;
  produk
    .findOne({ _id: id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});
route.put("/produk/:id", (req, res) => {
  const id = req.params.id;
  const { nama, price, stok, status } = req.body;
  produk
    .updateOne({ _id: id }, { $set: { nama, price, stok, status } })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

route.delete("/produk/:id", (req, res) => {
  const id = req.params.id;
  produk
    .deleteOne({ _id: id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});
module.exports = route;
