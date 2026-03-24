const express = require('express');
const router = express.Router();
const { getPackages } = require('../controllers/packagesController');

router.get('/', getPackages);

module.exports = router;
