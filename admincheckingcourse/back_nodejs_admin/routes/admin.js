const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getAllAdmin);

// router.post('/', adminController.postAdmin);

// router.put('/', groceryController.putGrocery);

// router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
