const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();



// /admin/user => GET
router.get('/users', userController.getProducts);

// /booking/add-user => POST
router.post('/add-user', userController.postAddProduct);
// /booking/edit-user => POST
router.post('/edit-user', userController.postEditProduct);
// /booking/delete-user => POST
router.post('/delete-user', userController.postDeleteProduct);

module.exports = router;
