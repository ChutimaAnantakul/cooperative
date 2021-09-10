const express = require('express');

const planController = require('../controllers/plan');

const router = express.Router();

router.get('/', planController.getAllPlans);

// router.post('/', planController.postProfile);

// router.put('/', groceryController.putGrocery);

// router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
