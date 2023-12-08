const express = require('express');
const customerController = require('../controller/customerController');
const verifyUser = require('../middleware/authMiddleware'); // Fix: Correct the path

const router = express.Router();

router.post('/create', verifyUser, customerController.create); // Fix: Added verifyUser middleware
router.get('/find-by-id', verifyUser, customerController.findByID); // Fix: Added verifyUser middleware
router.delete('/delete-by-id', verifyUser, customerController.deleteById); // Fix: Added verifyUser middleware
router.put('/update', verifyUser, customerController.update); // Fix: Added verifyUser middleware
router.get('/find-all', verifyUser, customerController.findAll); // Fix: Added verifyUser middleware

module.exports = router;

