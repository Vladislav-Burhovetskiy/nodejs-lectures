// const rootDir = require("../helpers/path-root-dir");
// const products = [];
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-products", {
    title: "Add Products page",
    path: "/admin/add-product",
  });
  // res.sendFile(path.join(rootDir, "views", "add-products.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    title: "Shop page",
    path: "/",
  });
};
