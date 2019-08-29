const express = require('express');
const router = express.Router();
const AppController = require('./controller');

const controller = new AppController();

router.route('/card_list/').get(controller.getCardsList);

module.exports = router;
