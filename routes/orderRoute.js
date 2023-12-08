const express = require('express');
const orderController = require('../controller/orderController');
const verifyUser = require('../middleware/authMiddleware'); // Fix: Corrected the path

const router = express.Router();

router.post('/create', orderController.create);
router.get('/find-by-id', orderController.findByID);
router.delete('/delete-by-id', orderController.deleteById);
router.put('/update', orderController.update);
router.get('/find-all', orderController.findAll);

module.exports = router;

