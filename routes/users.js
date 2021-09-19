const express = require('express');
const router = express.Router();
const uersController = require('../controllers/users_controllers');
module.exports = router;
router.get('/profile',uersController.profile);
router.get('/post',uersController.post);
router.get('/timeline',uersController.timeline);

