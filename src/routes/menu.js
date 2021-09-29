const express = require('express');
const menuController = require('../controllers/menuController');

router = express.Router();

router.get('/:id', menuController.index);

module.exports = router;