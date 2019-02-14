// routing.js
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send('ok'));
module.exports = function (app) {
    app.use(router);
}
