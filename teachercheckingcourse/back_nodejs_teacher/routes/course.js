const express = require('express');

const courseController = require('../controllers/course');

const router = express.Router();

router.get('/', courseController.getAllCourses);

// router.post('/', planController.postProfile);

// router.put('/', groceryController.putGrocery);

// router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
