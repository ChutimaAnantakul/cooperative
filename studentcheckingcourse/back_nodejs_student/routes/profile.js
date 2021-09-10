const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/', profileController.getAllProfiles);

router.post('/', profileController.postProfile);

// router.put('/', groceryController.putGrocery);

// router.delete('/:id', groceryController.deleteGrocery);

module.exports = router;
