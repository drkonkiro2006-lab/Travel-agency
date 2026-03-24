const express = require('express');
const router = express.Router();
const { getDestinations } = require('../controllers/destinationsController');

router.get('/', getDestinations);

module.exports = router;
