const express = require('express');
const customerController = require('../controller/customerController');
const verifyUser = require('..middleware/authMiddleware');

const router = express.Router();

router.post('/create', customerController.create);
router.post('/find-by-id', customerController.findByID);
router.post('/delete-by-id', customerController.deleteById);
router.post('/update', customerController.update);
router.post('/find-all', customerController.findAll);


module.exports = router;
