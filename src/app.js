// app.js
const express = require('express');
const app = express();
require('./routing')(app);
app.listen(3000);
