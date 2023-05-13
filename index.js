const express = require("express");
const app = express();
const port = 5000;

const products = require("./data/products.json");

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;

  const product = products.find((product) => product.id === id) || {};

  res.send(product);
});

app.listen(port, () => {
  console.log(`App running on port: ${port} http://localhost:${port}`);
});
