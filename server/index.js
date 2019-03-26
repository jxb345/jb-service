const express = require('express');
const bodyParser = require('body-parser');
const port = 3210;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));


const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;