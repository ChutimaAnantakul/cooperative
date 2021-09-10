const express = require('express');

const listController = require('../controllers/list');

const router = express.Router();

router.get('/', listController.getAllLists);

router.post('/', listController.postList);

router.get('/:student_id', listController.getListsById);

// router.put('/', groceryController.putGrocery);

// router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
