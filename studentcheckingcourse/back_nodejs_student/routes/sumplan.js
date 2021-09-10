const express = require('express');

const sumplanController = require('../controllers/sumplan');

const router = express.Router();

router.get('/', sumplanController.getAllSumplan);

router.post('/', sumplanController.postSumplan);

// router.get('/:student_id', sumplanController.getListsById);

// router.put('/', groceryController.putGrocery);

// router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
