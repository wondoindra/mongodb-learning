const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./database-config/database');

const app = express();

mongoose.connect(dbConfig.url);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./routes/user-route')(app);

app.listen(3000, () => console.log("app listening in localhost 3000"));