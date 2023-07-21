const express = require('express');
const router = express.Router();
const { auth, signUp } = require('../controllers/authController');
const { addAddress } = require('../controllers/shippingAddressController');
const {
  searchProduct,
  getProductCategories,
  getProductByProductId,
  saveProduct,
  updateProductDetails,
  deleteProduct,
} = require('../controllers/productController');
const { createOrder } = require('../controllers/orderController');
const { checkUserAuth } = require('../middleware/checkUserAuth');
const { checkAdminAuth } = require('../middleware/checkAdminAuth');

//auth routes
router.post('/users', signUp);
router.post('/auth', checkAdminAuth, auth);

// shipping address routes
router.post('/addresses', checkUserAuth, addAddress);

// product routes
router.get('/products', searchProduct);
router.post('/products', checkUserAuth, saveProduct);
// router.get('/products/categories', getProductCategories);
// router.get('/products/:id', getProductByProductId);
// router.put('/products/:id', updateProductDetails);
// router.delete('/products/:id', deleteProduct);

// router.post('/orders', createOrder);

module.exports = router;
