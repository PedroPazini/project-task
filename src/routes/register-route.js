const express = require('express');
const regController = require('../controllers/register-controller.js');

const router = express.Router();

//Register
router.post('/', regController.register);

module.exports = router;
