const products = require('../data.js');

// /api/products
const getProducts = (req, res) => {
  res.json(products);
};

// /api/products/:productID
const getProduct = (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.json(product);
};

// /api/products
const createProduct = (req, res) => {
  console.log(req.body);
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

//  /api/products/:productID
const updateProduct = (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  const updatedProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price
  };

  products[index] = updatedProduct;
  res.status(200).json('Product updated');
};

// /api/products/:productID
const deleteProduct = (req, res) => {
  const id = Number(req.params.productID);
  const index = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
  res.status(200).json('Product deleted');
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
