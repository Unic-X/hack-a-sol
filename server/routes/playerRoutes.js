const express = require('express');
const { getPlayer } = require('../controllers/playerController');
const router = express.Router();

router.get('/players', getPlayer);

module.exports = router;
