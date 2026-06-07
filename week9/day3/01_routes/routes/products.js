const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.js');

router.get('/', getProducts); // full path --> /api/products
router.get('/:productID', getProduct); // full path --> /api/products/:productID

router.post('/', createProduct); // full path --> /api/products
router.put('/:productID', updateProduct); // full path --> /api/products/:productID
router.delete('/:productID', deleteProduct); // full path --> /api/products/:productID

module.exports = router;
