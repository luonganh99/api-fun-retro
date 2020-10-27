const express = require('express');
const router = express.Router();
const boardController = require('../controllers/board.controller');

router.get('/', boardController.getAll);

module.exports = router;
