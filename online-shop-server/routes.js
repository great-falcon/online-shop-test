const express = require("express");
const router = express.Router();
const Product = require("./models/Product");


router.get("/products", function(req, res) {
  Product.find().then(products => {
    res.status(200).json(products);
  });
});

router.get("/products/:id", function(req, res) {
  Product.findById({ _id: req.params.id })
    .then(product => {
      res.status(200).json(product);
    });
});

router.post("/products", function(req, res, next) {
  Product.create(req.body)
    .then(() => {
      res.json({ status: "done" });
    })
    .catch(error => {
      console.error(error);
      next(error);
    });
});

module.exports = router;