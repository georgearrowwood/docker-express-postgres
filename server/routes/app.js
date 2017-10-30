const express = require('express');

const app = require('../controllers/app');

const router = express.Router();

router.get('/', app.index);

module.exports = router;
