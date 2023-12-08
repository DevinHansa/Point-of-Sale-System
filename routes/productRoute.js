const express = require('express');
const productController = require('../controller/productController');
const verifyUser = require('../middleware/authMiddleware'); // Fix: Corrected the path

const router = express.Router();

router.post('/create', productController.create); // Fix: Corrected the controller name
router.get('/find-by-id', productController.findByID);
router.delete('/delete-by-id', productController.deleteById);
router.put('/update', productController.update);
router.get('/find-all', productController.findAll);

module.exports = router;

