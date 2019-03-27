const express = require("express");
const router = express.Router();
const Product = require("./models/Product");
const Order = require('./models/Order')


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

router.post('/orders', (req, res, next) => {
  // console.log(req.body)
  const order = {
    products: req.body.order
  };
  Product.find()
  .then(products => {
    order.totalPrice = order.products.reduce((total, item, index) => {
      const itemFound = products.find(dbItem => dbItem.id === item.id)
      order.products[index].title = itemFound.title;
      order.products[index].price = itemFound.price;
      order.products[index].rowPrice = itemFound.price * item.count;
      return total + itemFound.price * item.count
    }, 0)
  })
  
  Order.create(order)
  .then(() => {
    console.log(order)
    res.status(201).json(order.products);
  })
  .catch(error => {
    console.error(error);
    next(error);
  });
})

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