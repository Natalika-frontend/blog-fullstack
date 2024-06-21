require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const {MONGODB_CONNECTION_STRING} = require("./config");

const port = 3015;
const app = express();

app.use(express.static('../client/build'));

app.use(cookieParser());
app.use(express.json());

app.use('/', routes);

mongoose.connect(MONGODB_CONNECTION_STRING).then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
});
