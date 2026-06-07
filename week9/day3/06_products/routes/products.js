const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

// This is my middleware!!!
const productLogger = require('../middleware/productLogger');

// Every route below uses this middleware
router.use(productLogger);

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

module.exports = router;
