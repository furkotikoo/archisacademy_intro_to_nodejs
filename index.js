const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", routes)

const PORT = 5000;
app.listen(PORT);