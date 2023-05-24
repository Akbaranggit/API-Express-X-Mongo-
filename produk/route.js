const route = require("express").Router();
const produkControler = require("./controler");

route.get("/produk", produkControler.index);
route.get("/produk/:id", produkControler.view);
route.post("/produk", produkControler.tambahProduk);
route.put("/produk/:id", produkControler.updateProduk);
route.delete("/produk/:id", produkControler.deleteProduk);

module.exports = route;
