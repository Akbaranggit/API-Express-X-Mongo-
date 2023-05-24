require("./config/mongoose");
const express = require("express");
const app = express();
const logger = require("morgan");
const produkV3router = require("./produk/route");
const produkV4router = require("./produk_mongoose/route");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/v3", produkV3router);
app.use("/api/v4", produkV4router);
app.use((req, res, next) => {
  res.send({
    status: "gagal",
    pesan: "data" + req.originalUrl + "tidak ditemukan",
  });
});
app.listen(port, () => console.log("server: http://localhost:3000"));
